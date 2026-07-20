// Odorant receptor repertoires across species: functional genes and pseudogenes.
//
// Serves §9.3. Two things this figure has to make visible at once. First, the
// spread — nearly three orders of magnitude across animals with broadly similar
// olfactory problems. Second, that the pseudogene fraction is large and varies
// independently, which is what makes birth-and-death dynamics a live alternative
// to any account that reads repertoire size as a coding decision.

export const controls = [
  { id: 'mode', label: 'Show', type: 'select', value: 'counts',
    options: [{value:'counts',label:'Gene counts — functional and pseudogenised'},
              {value:'frac',label:'Pseudogene fraction'},
              {value:'eco',label:'Repertoire size against ecological demand'}] },
  { id: 'sort', label: 'Order by', type: 'select', value: 'size',
    options: [{value:'size',label:'Functional repertoire size'},
              {value:'phylo',label:'Rough phylogenetic grouping'}] },
];

// [species, functional OR genes, pseudogenes, group, ecological reliance on olfaction 0-10]
const S=[
 ['African elephant',1950,2800,'mammal',9],
 ['Rat',1200,500,'mammal',9],
 ['Mouse',1100,240,'mammal',9],
 ['Cow',970,1160,'mammal',6],
 ['Dog',810,280,'mammal',10],
 ['Horse',1070,1570,'mammal',6],
 ['Human',390,430,'mammal',3],
 ['Chimpanzee',380,410,'mammal',3],
 ['Macaque',310,280,'mammal',4],
 ['Bottlenose dolphin',10,320,'mammal',1],
 ['Platypus',260,340,'mammal',4],
 ['Chicken',230,130,'bird',3],
 ['Zebra finch',200,130,'bird',3],
 ['Western clawed frog',820,470,'amphibian',7],
 ['Zebrafish',150,30,'fish',6],
 ['Drosophila (ORs)',60,10,'insect',7],
 ['Anopheles (ORs)',79,5,'insect',8],
 ['Honeybee (ORs)',163,10,'insect',9],
 ['Body louse (ORs)',10,3,'insect',3],
];
const GRP=['mammal','bird','amphibian','fish','insect'];
const CLS={mammal:'series-1',bird:'series-2',amphibian:'series-4',fish:'series-5',insect:'series-3'};

export function draw(root, values, { createPlot }) {
  const mode=values.mode??'counts';
  let rows=[...S];
  if((values.sort??'size')==='size') rows.sort((a,b)=>b[1]-a[1]);
  else rows.sort((a,b)=>GRP.indexOf(a[3])-GRP.indexOf(b[3])||b[1]-a[1]);

  if(mode==='eco'){
    const plot=createPlot(root,{width:700,height:400,
      margin:{top:22,right:26,bottom:52,left:70},
      x:{domain:[0,11],label:'independently scored reliance on olfaction (0–10)'},
      y:{domain:[5,3000],scale:'log',label:'functional OR genes'},
      title:'Repertoire size against ecological demand'});
    GRP.forEach(g=>{
      plot.points(rows.filter(r=>r[3]===g).map(r=>[r[4],r[1]]),{className:CLS[g],radius:5});
    });
    rows.filter(r=>['African elephant','Human','Bottlenose dolphin','Dog','Honeybee (ORs)'].includes(r[0]))
      .forEach(r=>plot.annotate(r[4],r[1],r[0],{anchor:'start'}));
    plot.legend(GRP.map(g=>({label:g,className:CLS[g]})));
    note(root,
      `<strong>The correlation is real and loose.</strong> Dolphins have lost almost everything and humans have lost ` +
      `half, both consistent with reduced reliance. But the elephant has five times the dog's repertoire and is not ` +
      `plausibly five times as olfactory, honeybees run a demanding chemical life on 163 receptors, and the frog ` +
      `outranks most mammals. <strong>The scatter around the trend is the size of the trend.</strong><br><br>` +
      `Two readings. Either the ecological axis is badly scored — likely, since "reliance on olfaction" is an ` +
      `impressionistic variable and the honest version would be a measured behavioural quantity — or repertoire size ` +
      `is substantially set by genomic dynamics that the coding problem does not see. §9.3 argues you cannot ` +
      `currently distinguish these, and that saying so is what makes the capstone's null result interpretable.`);
    return;
  }

  const isFrac=mode==='frac';
  const plot=createPlot(root,{width:720,height:34+rows.length*21,
    margin:{top:22,right:34,bottom:50,left:170},
    x: isFrac?{domain:[0,1],label:'fraction of the OR gene family that is pseudogenised'}
             :{domain:[3,4000],scale:'log',label:'genes'},
    y:{domain:[-0.7,rows.length-0.3],label:'',
       ticks:rows.map((_,i)=>i),
       tickFormat:v=>{const r=rows[rows.length-1-Math.round(v)];return r?r[0]:'';}},
    title: isFrac?'Pseudogenisation across the same species':'Functional and pseudogenised OR genes'});

  rows.forEach((r,i)=>{
    const y=rows.length-1-i;
    if(isFrac){
      const f=r[2]/(r[1]+r[2]);
      plot.line([[0,y],[f,y]],{className:CLS[r[3]],width:5});
      plot.points([[f,y]],{className:CLS[r[3]],radius:4});
    } else {
      plot.line([[3,y],[r[1],y]],{className:CLS[r[3]],width:5});
      plot.points([[r[1],y]],{className:CLS[r[3]],radius:4});
      plot.points([[Math.max(r[2],3.2),y]],{className:'marker',radius:3});
    }
  });
  if(isFrac) plot.vline(0.5,{label:'half the family dead'});
  plot.legend(isFrac?GRP.map(g=>({label:g,className:CLS[g]}))
    :[...GRP.map(g=>({label:`${g} — functional`,className:CLS[g]})),{label:'pseudogenes',className:'marker'}]);

  note(root, isFrac
    ? `<strong>Half of the human OR family is dead, and the fraction varies wildly among animals with similar ` +
      `lifestyles.</strong> Cow and horse carry more pseudogenes than functional genes while retaining large working ` +
      `repertoires; the dog does not. Pseudogenisation is the visible residue of birth-and-death dynamics — genes ` +
      `duplicate, drift, and die, and the family composition at any moment reflects that process as much as it ` +
      `reflects what the animal needs to smell.<br><br>` +
      `The consequence for coding arguments is direct. If a third to a half of the family is at any time in the ` +
      `process of being lost, the functional repertoire is <strong>not a designed set</strong>. It is a snapshot of ` +
      `a turnover process, and any account that reads receptor abundance as an allocation decision has to explain ` +
      `why the allocation is made of debris.`
    : `<strong>Nearly three orders of magnitude, across animals that all have to find food and avoid predators by ` +
      `smell.</strong> Insects run on tens of receptors, most mammals on around a thousand, the elephant on nearly ` +
      `two thousand, the dolphin on ten.<br><br>` +
      `The grey markers are pseudogenes and they are not small. Switch to the fraction view: in several species the ` +
      `dead genes outnumber the live ones. That is the signature of birth-and-death evolution, and it is the reason ` +
      `§9.3 treats "the repertoire is sized for the coding problem" as a hypothesis rather than a premise.`);
}

function note(root,html){
  const n=document.createElement('p'); n.className='x-figure-note'; n.innerHTML=html; root.appendChild(n);
  const c=document.createElement('p'); c.className='x-figure-credit';
  c.textContent='Gene counts are approximate and vary with annotation method and assembly quality — treat them as order-of-magnitude. The ecological score is this course’s own crude ranking, included so that its crudeness is visible.';
  root.appendChild(c);
}
