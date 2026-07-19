// Muscle lengths do not tell you joint angles.
//
// §7.1's central claim is that proprioception is a coordinate-transformation
// problem. That is abstract until you can drag a two-link arm and watch the
// muscle lengths change non-monotonically and ambiguously while the endpoint
// moves smoothly.

export const controls = [
  { id: 'shoulder', label: 'Shoulder angle', min: -20, max: 120, step: 1, value: 40, format: v=>`${Math.round(v)}°` },
  { id: 'elbow',    label: 'Elbow angle',    min: 10,  max: 150, step: 1, value: 70, format: v=>`${Math.round(v)}°` },
  { id: 'view', label: 'Show', type: 'select', value: 'arm',
    options: [{value:'arm',label:'Arm, muscles and endpoint'},
              {value:'ambiguity',label:'Two postures, one muscle length'}] },
];

const L1 = 90, L2 = 80;

function geometry(sDeg, eDeg) {
  const s = sDeg*Math.PI/180, e = eDeg*Math.PI/180;
  const elbow = { x: L1*Math.cos(s), y: -L1*Math.sin(s) };
  const abs = s - (Math.PI - e);
  const hand = { x: elbow.x + L2*Math.cos(abs), y: elbow.y - L2*Math.sin(abs) };
  // Monoarticular lengths depend on one joint; the biarticular on both.
  return { elbow, hand,
    mono1: 60 - 22*Math.cos(s),
    mono2: 60 - 22*Math.cos(e),
    bi:    60 - 14*Math.cos(s) - 14*Math.cos(e) };
}

export function draw(root, values, { createDiagram, createPlot, sample }) {
  const { shoulder:S, elbow:E, view } = values;
  if ((view??'arm')==='ambiguity') return drawAmbiguity(root, createPlot, sample);

  const g = geometry(S,E);
  const ox=200, oy=150;
  const d = createDiagram(root,{width:700,height:300,title:'A two-link arm and the muscles that report on it'});
  d.text(ox, 40, 'joint space → muscle lengths', {anchor:'middle', className:'head'});
  d.connect({x:ox,y:oy},{x:ox+g.elbow.x,y:oy+g.elbow.y},{sign:'excite'});
  d.connect({x:ox+g.elbow.x,y:oy+g.elbow.y},{x:ox+g.hand.x,y:oy+g.hand.y},{sign:'excite'});
  d.blob(ox,oy,7,{}); d.blob(ox+g.elbow.x,oy+g.elbow.y,6,{});
  d.blob(ox+g.hand.x,oy+g.hand.y,9,{className:'active'});
  d.text(ox+g.hand.x, oy+g.hand.y-18, 'endpoint', {anchor:'middle'});

  const bars=[['mono-articular (shoulder)',g.mono1,'series-1'],
              ['mono-articular (elbow)',g.mono2,'series-3'],
              ['BI-articular (both joints)',g.bi,'series-2']];
  bars.forEach(([lab,val,cls],i)=>{
    const y=90+i*46;
    d.text(430,y-10,lab,{anchor:'start'});
    d.connect({x:430,y},{x:430+val*2.2,y},{sign:'excite',className:`${cls} strong`});
    d.text(430+val*2.2+8,y+4,val.toFixed(0),{anchor:'start'});
  });
  d.note(430,236,['WHAT THE BRAIN RECEIVES','three muscle lengths — not two joint angles.',
                  'The bi-articular one depends on both joints,','so no single length identifies a posture.']);

  const n=document.createElement('p'); n.className='x-figure-note';
  n.innerHTML =
    `Drag the two joints and watch the muscle lengths. The <strong>bi-articular</strong> muscle spans both joints, ` +
    `so its length is a function of <em>both</em> angles — flexing the shoulder and extending the elbow can leave ` +
    `it unchanged. <br><br><strong>The animal wants endpoint position; the receptors report muscle lengths.</strong> ` +
    `The mapping is nonlinear, redundant (three lengths for two angles) and non-orthogonal. ` +
    `And §7.5 shows the nervous system solves it early: neurons in Clarke's nucleus report <em>global limb ` +
    `variables</em> — the length and orientation of the hip-to-foot axis — rather than individual muscle lengths, ` +
    `by the second synapse. The consumer is a controller, and the code is transformed into the basis the ` +
    `controller wants before it arrives.`;
  root.appendChild(n);
  const c=document.createElement('p'); c.className='x-figure-credit';
  c.textContent='Diagram generated for this course.'; root.appendChild(c);
}

function drawAmbiguity(root, createPlot, sample){
  const plot = createPlot(root,{width:700,height:330,
    margin:{top:20,right:24,bottom:50,left:70},
    x:{domain:[-20,120],label:'shoulder angle (degrees)'},
    y:{domain:[10,150],label:'elbow angle (degrees)'},
    title:'Iso-length contours: postures a single muscle cannot distinguish'});
  // Contours of constant bi-articular length across joint space.
  for (const target of [40,55,70,85,100]) {
    const pts=[];
    for(let s=-20;s<=120;s+=2){
      const c=(60-14*Math.cos(s*Math.PI/180)-target)/14;
      if(c>=-1&&c<=1){ const e=Math.acos(-c)*180/Math.PI; if(e>=10&&e<=150) pts.push([s,e]); }
    }
    if(pts.length>1) plot.line(pts,{className:'series-2',dashed:true,width:1.3});
  }
  plot.legend([{label:'constant bi-articular muscle length',className:'series-2',dashed:true}]);
  const n=document.createElement('p'); n.className='x-figure-note';
  n.innerHTML =
    `Each dashed curve is a set of postures that produce <strong>identical length</strong> in the bi-articular ` +
    `muscle. Every point along a curve is a different arm configuration the spindle cannot tell apart. ` +
    `<br><br>This is the same shape of problem as the vestibular tilt/translation confound (§6.1) and olfaction's ` +
    `concentration/distance confound (§3.1): <strong>distinct world states, identical receptor signal</strong>, ` +
    `resolvable only by combining sensors. Proprioception resolves it with the redundancy — many muscles, and the ` +
    `intersection of their iso-length sets is a point.`;
  root.appendChild(n);
}
