// Inverse optics: one receptor reading, infinitely many world states.
//
// §1.1 states I = R·L·cosθ and says it is underdetermined. Sliding the three
// factors while the product stays fixed makes "underdetermined" concrete.

export const controls = [
  { id: 'R', label: 'Surface reflectance', min: 0.05, max: 1, step: 0.01, value: 0.6, format:v=>v.toFixed(2) },
  { id: 'L', label: 'Illumination', min: 0.1, max: 3, step: 0.02, value: 1.0, format:v=>v.toFixed(2) },
  { id: 'th', label: 'Surface slant (degrees)', min: 0, max: 80, step: 1, value: 0, format:v=>`${Math.round(v)}°` },
];

export function draw(root, values, { createDiagram }) {
  const {R,L,th}=values;
  const I = R*L*Math.cos(th*Math.PI/180);
  const d=createDiagram(root,{width:700,height:290,title:'One measurement, three unknowns'});

  const bar=(x,label,frac,cls)=>{
    d.text(x,44,label,{anchor:'middle'});
    d.connect({x,y:60},{x,y:60+Math.max(4,frac*110)},{sign:'excite',className:`${cls} strong`});
    d.blob(x,60+Math.max(4,frac*110),7,{className:''});
  };
  bar(130,'reflectance R',R,'series-1');
  bar(250,'illumination L',L/3,'series-2');
  bar(370,'cos(slant)',Math.cos(th*Math.PI/180),'series-3');

  d.text(520,44,'what the receptor reports',{anchor:'middle',className:'head'});
  const y=110;
  d.connect({x:462,y},{x:462+Math.min(200,I*150),y},{sign:'excite',className:'output strong'});
  d.blob(462+Math.min(200,I*150),y,10,{className:'active'});
  d.text(560,150,`I = ${I.toFixed(3)}`,{anchor:'middle',className:'head'});

  d.note(40,206,[
    'THE PROBLEM',
    'A dark surface brightly lit and a light surface dimly lit are, at this receptor, identical.',
    'One number, three unknowns. Inversion is impossible without additional constraints —',
    'and those constraints come from the statistics of the world (§1.2).',
  ]);

  const n=document.createElement('p'); n.className='x-figure-note';
  n.innerHTML =
    `Move any two sliders in opposite directions and the readout barely changes. <strong>Try R = 0.9 with L = 0.4, ` +
    `then R = 0.3 with L = 1.2</strong> — very different surfaces under very different lighting, essentially the ` +
    `same receptor response.` +
    `<br><br>This is the ill-posedness that makes vision an inference problem rather than a measurement problem. ` +
    `It also shows why a naive efficient-coding framing is not enough on its own: a system that transmitted <em>I</em> ` +
    `perfectly would be an excellent codec and a useless visual system, because the animal cares about R, not I.` +
    `<br><br>Compare §3.1, where instantaneous receptor activation confounds identity, concentration, distance and ` +
    `transport history — the same shape of problem with five unknowns instead of three, and no straight lines to ` +
    `help recover the geometry.`;
  root.appendChild(n);
  const c=document.createElement('p'); c.className='x-figure-credit';
  c.textContent='Diagram generated for this course.'; root.appendChild(c);
}
