// Adaptation across modalities and timescales.
//
// Serves the §10 section of every module. The argument the course makes
// repeatedly is that adaptation timescale should track the VOLATILITY of the
// input statistics — fast where the world changes fast. Laying the modalities
// on one log-time axis is the only way to see whether that holds.

export const controls = [
  { id: 'focus', label: 'Highlight', type: 'select', value: 'all',
    options: [{value:'all',label:'All modalities'},{value:'Vision',label:'Vision'},
              {value:'Audition',label:'Audition'},{value:'Olfaction',label:'Olfaction'},
              {value:'Touch',label:'Touch'},{value:'Gustation',label:'Gustation'},
              {value:'Vestibular',label:'Vestibular'},{value:'Proprioception',label:'Proprioception'}] },
  { id: 'axis', label: 'Show', type: 'select', value: 'timescales',
    options: [{value:'timescales',label:'Adaptation timescales'},
              {value:'volatility',label:'Volatility vs adaptation speed'}] },
];

// [modality, mechanism, seconds-lo, seconds-hi]
const A=[
 ['Vision','photoreceptor gain (Ca²⁺)',0.05,0.5,'series-1'],
 ['Vision','contrast / variance adaptation',0.2,10,'series-1'],
 ['Vision','rod↔cone handover',60,1800,'series-1'],
 ['Audition','synaptic depression',0.005,0.2,'series-2'],
 ['Audition','level-statistics re-tuning',0.02,2,'series-2'],
 ['Audition','olivocochlear efferent gain',0.1,10,'series-2'],
 ['Olfaction','ORN Ca²⁺ feedback',0.1,3,'series-3'],
 ['Olfaction','cortical odour adaptation',1,20,'series-3'],
 ['Olfaction','bulbar plasticity / neurogenesis',86400,2592000,'series-3'],
 ['Touch','afferent adaptation',0.001,0.5,'series-4'],
 ['Touch','variance adaptation',0.1,5,'series-4'],
 ['Gustation','receptor adaptation',1,30,'series-5'],
 ['Gustation','satiety / alliesthesia',300,7200,'series-5'],
 ['Gustation','receptor cell turnover',864000,1209600,'series-5'],
 ['Vestibular','canal mechanical decay',3,20,'series-1'],
 ['Vestibular','VOR gain recalibration',3600,259200,'series-1'],
 ['Proprioception','load recalibration',10,600,'series-2'],
 ['Proprioception','tool / body-schema update',60,3600,'series-2'],
];

// Rough ordinal volatility of each modality's input statistics, 0-10.
const VOL={Vision:2,Audition:4,Olfaction:9,Touch:5,Gustation:6,Vestibular:3,Proprioception:5};
// Fastest "statistics re-tuning" adaptation, seconds.
const FAST={Vision:2,Audition:0.3,Olfaction:0.3,Touch:1,Gustation:10,Vestibular:8,Proprioception:60};

const fmt=s=> s<1?`${(s*1000).toFixed(0)} ms`: s<60?`${s.toFixed(0)} s`:
  s<3600?`${(s/60).toFixed(0)} min`: s<86400?`${(s/3600).toFixed(0)} h`:`${(s/86400).toFixed(0)} d`;

export function draw(root, values, { createPlot, sample }) {
  const focus=values.focus??'all';
  if((values.axis??'timescales')==='volatility') return drawVol(root,createPlot,focus);

  const rows=A.filter(r=>focus==='all'||r[0]===focus);
  const plot=createPlot(root,{width:720,height:30+rows.length*19,
    margin:{top:20,right:30,bottom:50,left:210},
    x:{domain:[0.001,3e6],scale:'log',label:'adaptation timescale (seconds)',
       tickFormat:v=>fmt(v)},
    y:{domain:[-0.7,rows.length-0.3],label:'',
       ticks:rows.map((_,i)=>i),tickFormat:v=>{const r=rows[rows.length-1-Math.round(v)];return r?r[1]:'';}},
    title:'Adaptation mechanisms across modalities and timescales'});
  rows.forEach((r,i)=>{
    const y=rows.length-1-i;
    plot.line([[r[2],y],[r[3],y]],{className:r[4],width:8});
    plot.points([[r[2],y],[r[3],y]],{className:r[4],radius:2.5});
  });
  plot.vline(1,{className:'marker',label:'1 s'});
  plot.vline(86400,{className:'marker',label:'1 day'});

  const n=document.createElement('p'); n.className='x-figure-note';
  n.innerHTML =
    `Every modality adapts, and every one does it at several timescales at once — from milliseconds of synaptic ` +
    `depression to days of structural change. The mechanisms differ; the <strong>function is identical</strong>: ` +
    `keep a limited output range positioned over the input distribution that is actually arriving.` +
    `<br><br>Two things worth noticing. <strong>Olfaction and gustation have the longest-timescale entries</strong> ` +
    `— bulbar neurogenesis and receptor-cell turnover — which no other modality has at all; both chemosenses sit ` +
    `in exposed epithelia and both face non-stationary input. And <strong>the fast end is remarkably similar ` +
    `everywhere</strong>, near the 100 ms integration time of the circuits consuming the signal. ` +
    `<br><br>Switch to the volatility view for the claim this course actually wants to test.`;
  root.appendChild(n);
  const c=document.createElement('p'); c.className='x-figure-credit';
  c.textContent='Compiled from the per-module sections; ranges are order-of-magnitude. Figure generated for this course.';
  root.appendChild(c);
}

function drawVol(root,createPlot,focus){
  const M=Object.keys(VOL);
  const plot=createPlot(root,{width:720,height:360,
    margin:{top:20,right:34,bottom:54,left:78},
    x:{domain:[0,10],label:'volatility of the input statistics →',ticks:[0,2,4,6,8,10]},
    y:{domain:[0.1,200],scale:'log',label:'fastest statistics re-tuning (s)',tickFormat:v=>fmt(v)},
    title:'Does adaptation speed track how fast the world changes?'});
  const CLS={Vision:'series-1',Audition:'series-2',Olfaction:'series-3',Touch:'series-4',
             Gustation:'series-5',Vestibular:'series-1',Proprioception:'series-2'};
  for(const m of M){
    const big = focus==='all'||focus===m;
    plot.points([[VOL[m],FAST[m]]],{className:CLS[m],radius:big?7:3.5});
    if(big) plot.annotate(VOL[m]+0.25,FAST[m],m,{anchor:'start',className:CLS[m]});
  }
  const n=document.createElement('p'); n.className='x-figure-note';
  n.innerHTML =
    `<strong>The prediction:</strong> a system adapting to input statistics faces an estimation problem — average ` +
    `over too long and you track a stale distribution, too short and you chase noise. The optimal window depends ` +
    `on how fast the statistics actually change, so <em>adaptation should be faster where the world is more ` +
    `volatile</em>, and the points should trend downward to the right.` +
    `<br><br><strong>They roughly do.</strong> Vision has the most stationary statistics (§1.2) and can afford slow ` +
    `adaptation; olfaction has the least stationary (§3.2) and shows the fastest cortical adaptation of any ` +
    `modality here. Vestibular sits low-volatility because head dynamics obey fixed physics.` +
    `<br><br><strong>But the axis is ordinal and the fit is loose</strong>, and this is exactly the kind of claim ` +
    `that should be measured rather than eyeballed. The clean version: present controlled stimulus distributions, ` +
    `switch them, and measure the re-tuning time constant the way Dean and colleagues did for sound level. ` +
    `That paradigm transfers directly to olfaction and, as far as this course is aware, has not been run.`;
  root.appendChild(n);
}
