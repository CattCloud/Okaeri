const fs = require('fs');
const OUT = 'C:/cerebro/StayHere/fundamentos/img/';
const NAMES = ['Do','Re','Mi','Fa','Sol','La','Si'];
const FCOLOR = {1:'#E2342E',2:'#EA7317',3:'#16A34A',4:'#1565C0',5:'#8E2DE2'};
const blackAfter = i => [0,1,3,4,5].includes(((i%7)+7)%7);
const FONT = 'font-family="Arial, Helvetica, sans-serif"';

function keyboard(cfg){
  const {N,left,top,ww=40,wh=150,bw=24,bh=95} = cfg;
  const wf=cfg.whiteFill||{}, bf=cfg.blackFill||{}, wn=cfg.whiteName||{},
        red=cfg.redKey||{}, circ=cfg.circ||{};
  let s='';
  for(let i=0;i<N;i++){
    const x=left+i*ww; const fill=wf[i]||'#ffffff';
    s+=`<rect x="${x}" y="${top}" width="${ww}" height="${wh}" rx="2" fill="${fill}" stroke="#333333" stroke-width="1.8"/>`;
  }
  for(let i=0;i<N-1;i++){
    if(!blackAfter(i)) continue;
    const x=left+(i+1)*ww-bw/2; const fill=bf[i]||'#1a1a1a';
    s+=`<rect x="${x}" y="${top}" width="${bw}" height="${bh}" rx="2" fill="${fill}"/>`;
  }
  (red.white||[]).forEach(i=>{ const x=left+i*ww;
    s+=`<rect x="${x}" y="${top}" width="${ww}" height="${wh}" rx="2" fill="none" stroke="#E2342E" stroke-width="4"/>`; });
  (red.black||[]).forEach(i=>{ const x=left+(i+1)*ww-bw/2;
    s+=`<rect x="${x}" y="${top}" width="${bw}" height="${bh}" rx="2" fill="none" stroke="#E2342E" stroke-width="3.5"/>`; });
  for(const i in wn){ const x=left+(+i)*ww+ww/2; const o=wn[i];
    s+=`<text x="${x}" y="${top+wh-12}" text-anchor="middle" font-size="14" font-weight="${o.weight||'normal'}" fill="${o.color||'#111'}" ${FONT}>${NAMES[((+i)%7+7)%7]}</text>`; }
  if(circ.white) for(const i in circ.white){ const o=circ.white[i]; const cx=left+(+i)*ww+ww/2; const cy=top+wh-40;
    s+=`<circle cx="${cx}" cy="${cy}" r="12" fill="${o.color}"/><text x="${cx}" y="${cy+5}" text-anchor="middle" font-size="15" font-weight="bold" fill="#fff" ${FONT}>${o.n}</text>`; }
  if(circ.black) for(const i in circ.black){ const o=circ.black[i]; const cx=left+(+i+1)*ww; const cy=top+bh-18;
    s+=`<circle cx="${cx}" cy="${cy}" r="11" fill="${o.color}" stroke="#fff" stroke-width="1.5"/><text x="${cx}" y="${cy+5}" text-anchor="middle" font-size="14" font-weight="bold" fill="#fff" ${FONT}>${o.n}</text>`; }
  if(cfg.blackNames) for(const i in cfg.blackNames){ const a=cfg.blackNames[i][0], b=cfg.blackNames[i][1]; const cx=left+(+i+1)*ww;
    s+=`<text x="${cx}" y="${top-22}" text-anchor="middle" font-size="13" font-weight="bold" fill="#333333" ${FONT}>${a}</text>`+
       `<text x="${cx}" y="${top-7}" text-anchor="middle" font-size="13" fill="#888888" ${FONT}>${b}</text>`; }
  return s;
}
const svg=(w,h,inner)=>`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" ${FONT}><rect x="0" y="0" width="${w}" height="${h}" fill="#ffffff"/>${inner}</svg>\n`;
const T=(x,y,t,o={})=>`<text x="${x}" y="${y}" text-anchor="${o.a||'middle'}" font-size="${o.s||16}" font-weight="${o.w||'normal'}" fill="${o.f||'#333'}" ${FONT}>${t}</text>`;

/* 03-B calentamiento */
{
  const ww=44, N=8, top=80, W=560, left=(W-N*ww)/2, cx=W/2;
  let inner=T(cx,34,'Posición de la mano derecha: el calentamiento de 5 dedos',{s:15,w:'bold'});
  inner+=keyboard({N,left,top,ww,
    whiteName:{0:{weight:'bold'},1:{weight:'bold'},2:{weight:'bold'},3:{weight:'bold'},4:{weight:'bold'},5:{color:'#999'},6:{color:'#999'},7:{color:'#999'}},
    circ:{white:{0:{n:1,color:FCOLOR[1]},1:{n:2,color:FCOLOR[2]},2:{n:3,color:FCOLOR[3]},3:{n:4,color:FCOLOR[4]},4:{n:5,color:FCOLOR[5]}}}});
  inner+=T(cx,262,'El pulgar (1) en Do central; 2-3-4-5 caen en Re-Mi-Fa-Sol. Es una posición, no un orden.',{s:13,f:'#666'});
  fs.writeFileSync(OUT+'03-calentamiento.svg', svg(W,285,inner));
}
/* 04-A forma de Do mayor */
{
  const left=70, top=80, ww=46, N=8, right=left+N*ww, W=right+left, cx=(left+right)/2;
  let inner=T(cx,34,'Do mayor = Do + Mi + Sol (dedos 1-3-5)',{s:16,w:'bold'});
  inner+=keyboard({N,left,top,ww,
    whiteFill:{0:'#16A34A',2:'#16A34A',4:'#16A34A'},
    whiteName:{0:{color:'#fff',weight:'bold'},2:{color:'#fff',weight:'bold'},4:{color:'#fff',weight:'bold'},1:{color:'#bbb'},3:{color:'#bbb'}},
    circ:{white:{0:{n:1,color:'#0b6b32'},2:{n:3,color:'#0b6b32'},4:{n:5,color:'#0b6b32'}}}});
  inner+=T(cx,262,'Se salta una tecla blanca entre cada nota (Re y Fa quedan fuera).',{s:13,f:'#666'});
  fs.writeFileSync(OUT+'04-do-mayor.svg', svg(W,285,inner));
}
/* 04-B tres acordes mayores */
{
  const ww=30, top=58, N=9, wh=110, bh=68, kbW=N*ww, gap=30, m=30;
  const lefts=[m, m+kbW+gap, m+2*(kbW+gap)];
  const W=lefts[2]+kbW+m, cx=W/2;
  const mk=(left,title,notes)=>{ const wf={},wn={}; notes.forEach(i=>{wf[i]='#16A34A';wn[i]={color:'#fff',weight:'bold'};});
    return T(left+kbW/2,48,title,{s:14,w:'bold',f:'#16A34A'})+keyboard({N,left,top,ww,wh,bh,whiteFill:wf,whiteName:wn}); };
  let inner=T(cx,28,'La misma forma, movida: tus tres acordes mayores',{s:16,w:'bold'});
  inner+=mk(lefts[0],'Do mayor',[0,2,4]);
  inner+=mk(lefts[1],'Fa mayor',[3,5,7]);
  inner+=mk(lefts[2],'Sol mayor',[4,6,8]);
  fs.writeFileSync(OUT+'04-tres-acordes.svg', svg(W,205,inner));
}
/* 04-C mayor vs menor */
{
  const ww=40, top=78, N=8, wh=150, kbW=N*ww, m=50, gap=60;
  const left1=m, left2=m+kbW+gap, W=left2+kbW+m, cx=W/2;
  let inner=T(cx,32,'Mayor vs. menor: una sola nota cambia',{s:16,w:'bold'});
  inner+=T(left1+kbW/2,62,'Do mayor — alegre',{s:14,w:'bold'});
  inner+=keyboard({N,left:left1,top,ww,wh,
    whiteFill:{0:'#1565C0',2:'#1565C0',4:'#1565C0'},
    whiteName:{0:{color:'#fff',weight:'bold'},2:{color:'#fff',weight:'bold'},4:{color:'#fff',weight:'bold'}},
    redKey:{white:[2]}});
  inner+=T(left2+kbW/2,62,'Do menor — triste / emotivo',{s:14,w:'bold'});
  inner+=keyboard({N,left:left2,top,ww,wh,
    whiteFill:{0:'#1565C0',4:'#1565C0'}, blackFill:{1:'#1565C0'},
    whiteName:{0:{color:'#fff',weight:'bold'},4:{color:'#fff',weight:'bold'}},
    redKey:{black:[1]}});
  inner+=T(cx,262,'La nota roja baja un poco: Mi → Mi♭. El menor es el color emotivo (como el Lam de tu canción).',{s:13,f:'#666'});
  fs.writeFileSync(OUT+'04-mayor-vs-menor.svg', svg(W,285,inner));
}
/* 01: nombres de las teclas negras (sostenidos y bemoles) */
{
  const SH='♯', FL='♭';
  const ww=54, top=120, N=8, wh=150, W=700, left=(W-N*ww)/2, cx=W/2;
  const wn={}; for(let i=0;i<N;i++) wn[i]={};
  let inner=T(cx,34,'Las teclas negras tienen dos nombres',{s:16,w:'bold'});
  inner+=T(cx,58,SH+' sostenido = sube (negra de la derecha)        '+FL+' bemol = baja (negra de la izquierda)',{s:13,f:'#555'});
  inner+=keyboard({N,left,top,ww,wh,bw:30,bh:104, whiteName:wn,
    blackNames:{0:['Do'+SH,'Re'+FL],1:['Re'+SH,'Mi'+FL],3:['Fa'+SH,'Sol'+FL],4:['Sol'+SH,'La'+FL],5:['La'+SH,'Si'+FL]}});
  inner+=T(cx,top+wh+34,'La misma negra tiene dos nombres. Ej.: Mi'+FL+' = Re'+SH+' = la negra a la izquierda de Mi.',{s:13,f:'#666'});
  fs.writeFileSync(OUT+'01-negras-nombres.svg', svg(W,top+wh+55,inner));
}
/* Tarjetas de acorde para Anki (reverso): Do, Fa, Sol, Lam */
{
  const chords=[
    {file:'acorde-do', name:'Do mayor', notes:[0,2,4], sub:'Do · Mi · Sol'},
    {file:'acorde-fa', name:'Fa mayor', notes:[3,5,7], sub:'Fa · La · Do'},
    {file:'acorde-sol',name:'Sol mayor',notes:[4,6,8], sub:'Sol · Si · Re'},
    {file:'acorde-lam',name:'La menor (Lam)', notes:[5,7,9], sub:'La · Do · Mi'},
  ];
  const fingers=[1,3,5];
  const ww=40, top=72, N=10, wh=150, left=30, W=left*2+N*ww, cx=W/2;
  for(const c of chords){
    const wf={}, wn={}, cw={};
    c.notes.forEach((i,k)=>{ wf[i]='#16A34A'; wn[i]={color:'#fff',weight:'bold'}; cw[i]={n:fingers[k],color:'#0b6b32'}; });
    let inner=T(cx,38,c.name,{s:20,w:'bold'});
    inner+=keyboard({N,left,top,ww,wh,whiteFill:wf,whiteName:wn,circ:{white:cw}});
    inner+=T(cx,top+wh+30,c.sub+'   (dedos 1-3-5)',{s:15,f:'#444'});
    fs.writeFileSync(OUT+c.file+'.svg', svg(W,top+wh+50,inner));
  }
}
console.log('OK keyboards');
