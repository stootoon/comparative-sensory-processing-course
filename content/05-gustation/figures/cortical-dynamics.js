// Gustatory cortical responses evolve through phases, with palatability
// arriving near the decision. §5.7 argues this is a decision variable rather
// than a sensory representation.
export const controls = [
  { id: 'palat', label: 'Palatability', min: -1, max: 1, step: 0.05, value: 0.6, format:v=>v>0?`+${v.toFixed(2)}`:v.toFixed(2) },
  { id: 'expect', label: 'Expected?', type: 'select', value: 'unexpected',
    options: [{value:'unexpected',label:'Unexpected delivery'},{value:'expected',label:'Expected delivery'}] },
];
export function draw(root, values, { createPlot, sample }) {
  const p=values.palat, exp=(values.expect??'unexpected')==='expected';
  const bump=(t,c,w)=>Math.exp(-Math.pow((t-c)/w,2));
  const plot=createPlot(root,{width:700,height:340,
    margin:{top:20,right:30,bottom:52,left:78},
    x:{domain:[-500,2000],label:'time from delivery (ms)'},
    y:{domain:[-1.1,1.15],label:'normalised population response'},
    title:'Gustatory cortex: detection → identity → palatability'});
  plot.line(sample(-500,2000,240,t=>bump(t,200,140)),{className:'series-1'});
  plot.line(sample(-500,2000,240,t=>0.85*bump(t,600,260)),{className:'series-3'});
  plot.line(sample(-500,2000,240,t=>p*bump(t,1200,380)),{className:'series-2'});
  if(exp) plot.line(sample(-500,2000,240,t=>t<0?0.5*bump(t,-220,150):0),{className:'series-4',dashed:true});
  plot.vline(0,{className:'marker',label:'delivery'});
  plot.vline(1200,{className:'marker',label:'swallow / reject'});
  plot.hline(0,{className:'marker'});
  plot.legend([{label:'detection',className:'series-1'},{label:'identity',className:'series-3'},
               {label:'palatability (signed)',className:'series-2'},
               ...(exp?[{label:'anticipatory activity',className:'series-4',dashed:true}]:[])]);
  const n=document.createElement('p'); n.className='x-figure-note';
  n.innerHTML =
    `Three phases, in order: something is there, what it is, and whether to swallow it. ` +
    `<strong>The palatability signal arrives around the time the decision is made</strong>, and it is signed — ` +
    `flip the palatability slider and it inverts.` +
    (exp ? `<br><br>With delivery <strong>expected</strong>, there is anticipatory activity <em>before</em> the ` +
           `stimulus arrives. A sensory representation should not respond to a stimulus that has not happened yet.`
         : `<br><br><strong>Switch to expected delivery</strong> and watch activity appear before the stimulus does.`) +
    `<br><br>That is not a sensory representation in the V1 sense; it is closer to an evolving decision variable. ` +
    `Which continues a pattern: A1 retunes with task (§2.7), piriform is an associative network (§3.7), gustatory ` +
    `cortex is mostly about decision. <strong>V1 is looking like the outlier</strong>, and treating it as the ` +
    `template for "sensory cortex" has distorted expectations for every other modality — including olfaction.`;
  root.appendChild(n);
  const c=document.createElement('p'); c.className='x-figure-credit';
  c.textContent='Schematic of response phases reported in gustatory cortex; generated for this course.';
  root.appendChild(c);
}
