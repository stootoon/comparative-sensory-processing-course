// Dimensionality cuts both ways.
//
// The same number — how many independent channels the receptor array carries —
// is the reason identity is hard in olfaction and the reason demixing is easy.
// This figure puts the two consequences on one axis so the sign flip is visible
// rather than asserted, with the seven modalities marked at their measured D.

export const controls = [
  { id: 'nsamp', label: 'Stimuli you can afford to measure (log10 N)', min: 2, max: 7, step: 0.5, value: 4,
    format: v=>`10^${v.toFixed(1)} = ${Math.round(10**v).toLocaleString()}` },
  { id: 'k', label: 'Sources present in a mixture', min: 1, max: 12, step: 1, value: 4,
    format: v=>`${v}` },
  { id: 'mode', label: 'Show', type: 'select', value: 'both',
    options: [{value:'both',   label:'Both consequences'},
              {value:'ident',  label:'Identity: how well can the space be sampled?'},
              {value:'demix',  label:'Demixing: can k sources be separated?'}] },
];

const MODS=[
 {n:'Audition', D:1,   cls:'series-2'},
 {n:'Gustation',D:5,   cls:'series-5'},
 {n:'Vestib.',  D:6,   cls:'series-1'},
 {n:'Vision',   D:5,   cls:'series-1'},
 {n:'Touch',    D:12,  cls:'series-4'},
 {n:'Propr.',   D:20,  cls:'series-2'},
 {n:'Olfaction',D:700, cls:'series-3'},
];

export function draw(root, values, { createPlot, sample }) {
  const logN=values.nsamp??4, N=10**logN;
  const k=values.k??4;
  const mode=values.mode??'both';

  // Coverage: with N samples, the spacing of a grid in D dimensions is N^(-1/D)
  // of the range, so resolution per axis collapses. Report it as a 0-1 score.
  const coverage=D=>Math.min(1, Math.pow(N, 1/D)/10);
  // Separability: k sources in D dimensions are generically linearly separable
  // once D exceeds a small multiple of k. Smooth logistic in log D.
  const separable=D=>1/(1+Math.exp(-(Math.log(D)-Math.log(3*k))*2.2));

  const plot=createPlot(root,{width:700,height:360,
    margin:{top:24,right:34,bottom:56,left:74},
    x:{domain:[1,1200],scale:'log',label:'stimulus dimensionality D (independent receptor channels)'},
    y:{domain:[0,1.15],label:'score (0–1)'},
    title:'The same D, two opposite consequences'});

  if(mode==='both'||mode==='ident')
    plot.line(sample(1,1200,300,coverage),{className:'series-3'});
  if(mode==='both'||mode==='demix')
    plot.line(sample(1,1200,300,separable),{className:'series-1'});

  MODS.forEach(m=>{
    plot.vline(m.D,{label:m.n});
  });

  const legend=[];
  if(mode==='both'||mode==='ident') legend.push({label:`sampling coverage with N = 10^${logN.toFixed(1)} stimuli`,className:'series-3'});
  if(mode==='both'||mode==='demix') legend.push({label:`${k} sources linearly separable`,className:'series-1'});
  plot.legend(legend);

  const covOlf=coverage(700), covVis=coverage(5);
  const sepOlf=separable(700), sepAud=separable(1);
  const n=document.createElement('p'); n.className='x-figure-note';
  n.innerHTML =
    `At N = ${Math.round(N).toLocaleString()} measured stimuli, coverage of a 5-dimensional space scores ` +
    `<strong>${covVis.toFixed(2)}</strong> and coverage of a 700-dimensional space scores ` +
    `<strong>${covOlf.toFixed(2)}</strong>. The curve falls because grid spacing goes as N<sup>-1/D</sup>: ` +
    `every experiment anyone could run leaves olfactory stimulus space essentially unsampled, which is the ` +
    `quantitative form of "the ensemble has not been measured". Slide N up by three orders of magnitude and watch ` +
    `how little the olfactory end moves. <br><br>The other curve runs the other way. With ${k} sources present, ` +
    `separability scores <strong>${sepAud.toFixed(2)}</strong> at D = 1 and <strong>${sepOlf.toFixed(2)}</strong> ` +
    `at D = 700. Audition must solve an underdetermined demixing problem with one carrier dimension, and pays for ` +
    `it with harmonicity, onset and modulation cues plus a deep brainstem. Olfaction's mixture problem is ` +
    `<em>generically</em> overdetermined. <strong>Raise the source count</strong> and the crossing point moves ` +
    `right — the advantage is real but finite, and it is nonlinear receptor binding rather than dimensionality ` +
    `that spends it.`;
  root.appendChild(n);
  const c=document.createElement('p'); c.className='x-figure-credit';
  c.textContent='Both curves are analytic caricatures with the correct scaling, not fits to data. D values from the per-module datasheets.';
  root.appendChild(c);
}
