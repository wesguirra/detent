'use strict';
const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
// Public raster previews only. Full geometry remains in the private project.
const pt={
  "skip": "Ir para o conteúdo",
  "navExplore": "Explorar",
  "navFiles": "Obter DETENT · US$19",
  "navLicense": "Licenças",
  "actualCad": "D25 / PRÉVIA DE ACABAMENTO",
  "loading": "Preparando seu DETENT…",
  "drag": "Prévia renderizada de acabamento",
  "configure": "SUA CONFIGURAÇÃO",
  "colorTitle": "Deixe com a sua cara.",
  "colorText": "Três acabamentos. Um sistema.<br>Escolha a cor de cada família de peças.",
  "structure": "Estrutura",
  "mounts": "Bases e contatos",
  "controls": "Pinos e controles",
  "colorNote": "Prévia de cores renderizada. O projeto completo requer acesso pago.",
  "getFiles": "Obter DETENT",
  "angle": "Ângulo",
  "height": "Altura",
  "width": "Largura",
  "depth": "Profundidade",
  "step1": "01 / Soltar",
  "step2": "02 / Ajustar",
  "step3": "03 / Travar",
  "unloaded": "Faça os ajustes sempre sem o laptop.",
  "systemTitle": "Um lugar para seu laptop.<br>Espaço ao redor.",
  "systemText": "Dois apoios ajustáveis, quatro retentores de borda e uma travessa traseira opcional. Ajuste o vão e a altura ao seu laptop, abra as travas frontais e deslize-o até a posição. O encaixe depende das dimensões do laptop e do espaço sob a mesa.",
  "filesEyebrow": "O PROJETO COMPLETO. ACESSO PAGO.",
  "filesTitle": "Um projeto.<br>Tudo para montar.",
  "prototype": "D25 · PROTÓTIPO EM DESENVOLVIMENTO",
  "fullScale": "O projeto completo.",
  "fullText": "O projeto digital D25: STLs identificados, 3MFs do Orca separados por cor, arquivos FreeCAD e STEP e documentação de montagem. Imprima e modifique para seu uso pessoal.",
  "halfScale": "Para quem vende impressões.",
  "halfText": "Vender peças físicas DETENT exige uma licença comercial separada. Acesso aos arquivos não autoriza vender impressões.",
  "sourceTitle": "Um sistema completo.",
  "sourceText": "Trilhos padrão e curto, quatro retentores ajustáveis, travessa opcional, identificação das peças, ferragens e instruções de montagem. Sem downloads gratuitos do projeto.",
  "prototypeNote": "<strong>Protótipo em desenvolvimento.</strong> A D25 tem conferência geométrica, sem capacidade de carga validada. Ensaios físicos de carga, impacto, fadiga e clique ainda estão pendentes. Acesso pago não significa certificação.",
  "licenseEyebrow": "PARA CRIAR. COM RESPONSABILIDADE.",
  "licenseTitle": "Uma licença para<br>seu tipo de uso.",
  "licenseText": "Arquivos e manuais exigem acesso pago. A venda de impressões também exige licença comercial. Os termos são confirmados antes da compra.",
  "termsLink": "Leia os termos da licença ↗",
  "commercial": "LICENÇA COMERCIAL DE IMPRESSÃO",
  "perYear": "USD / ano",
  "offerText": "Para uma pessoa ou empresa vender peças físicas DETENT. Não inclui revenda de arquivos digitais.",
  "offer1": "Uma empresa ou pessoa identificada",
  "offer2": "12 meses a partir da ativação por escrito",
  "offer3": "Crédito ao DETENT obrigatório",
  "requestLicense": "Solicitar licença comercial",
  "checkoutNote": "A solicitação é pública no GitHub. Não inclua dados pessoais ou de pagamento. As instruções de pagamento serão enviadas separadamente; solicitar não ativa a licença.",
  "footer": "Projetado para encontrar seu lugar.",
  "terms": "Termos",
  "heroEyebrow": "DETENT / SISTEMA PARA LAPTOP SOB A MESA",
  "heroProductTitle": "Espaço para<br><em>o que vem a seguir.</em>",
  "heroProductText": "Um lugar próprio para seu laptop.<br>Mais espaço para todo o resto.",
  "discoverAdjustments": "Explore os ajustes ↓",
  "chooseFinish": "Escolha suas cores ↗",
  "studioLabel": "D25 / SOB A SUA MESA",
  "heroMaterials": "Com a travessa traseira opcional.",
  "featureIntroLabel": "QUATRO AJUSTES. UM SISTEMA COERENTE.",
  "featureIntroTitle": "Encontre seu encaixe.<br>Uma posição por vez.",
  "featureIntroText": "Veja exatamente o que se move, o que fica fixo e como cada pino volta para travar o ajuste. Retire sempre o laptop antes de ajustar.",
  "preparingAnimation": "Preparando animação…",
  "angleFeatureTitle": "Um pouco de ângulo.<br>Um encaixe melhor.",
  "angleFeatureText": "Seis posições de 0° a 12,5°. Gire e retire o pino de ângulo, incline o trilho e insira o pino na próxima posição. O pivô M3 fica no lugar.",
  "angleMetric": "6 posições indexadas",
  "angleCaption": "Pino de ângulo · Ø5 mm",
  "anglePlay": "Reproduzir ajuste de ângulo",
  "heightFeatureTitle": "Altura.<br>Na sua medida.",
  "heightFeatureText": "Três níveis de altura em passos de 6 mm. A haste desliza pelo carro enquanto a base fica fixa na mesa. Recoloque o pino H e gire para reter a nova posição.",
  "heightMetric": "3 níveis de altura",
  "heightCaption": "Pino H · Ø4 mm",
  "heightPlay": "Reproduzir ajuste de altura",
  "widthFeatureTitle": "Dois trilhos.<br>A largura do seu laptop.",
  "widthFeatureText": "Posicione cada trilho nas bases universais alongadas. Retire os pinos W e o pino da travessa opcional, deslize até alinhar os furos e trave. O vão disponível também depende da instalação das bases e da sobreposição da travessa.",
  "widthMetric": "Curso por base · 9 posições",
  "widthCaption": "Pinos W · Ø3 mm",
  "widthPlay": "Reproduzir ajuste de largura",
  "depthFeatureTitle": "Estenda o apoio.<br>Mantenha a conexão.",
  "depthFeatureText": "O extensor traseiro acompanha uma guia de 45°, com sete posições em intervalos de 9 mm. O pino D atravessa o trilho e o extensor para reter a profundidade escolhida.",
  "depthMetric": "7 posições de profundidade",
  "depthCaption": "Pino D · Ø4 mm",
  "depthPlay": "Reproduzir ajuste de profundidade",
  "connectionEyebrow": "OS DETALHES QUE FAZEM O SISTEMA.",
  "baseFeatureTitle": "Uma base.<br>Qualquer lado.",
  "baseFeatureText": "A base universal de 113 × 44 mm serve nos dois lados. Nove posições indexadas oferecem 80 mm de curso por carro, aproximando os apoios conforme seu espaço.",
  "inspectAssembly": "Inspecione a montagem ↗",
  "linkFeatureTitle": "Uma conexão opcional.<br>Um par integrado.",
  "linkFeatureText": "A travessa telescópica traseira une os trilhos e acompanha a largura. Use o mesmo ângulo, altura e profundidade nos dois lados. Ela conecta os apoios; não acrescenta uma fixação à mesa.",
  "tryRearLink": "Veja o sistema completo ↑",
  "finishEyebrow": "SUA MESA. SUA PALETA.",
  "finishTitle": "O toque final é seu.",
  "finishText": "Escolha as cores da estrutura, bases e detalhes.<br>Explore sua combinação em tempo real.",
  "requestAccess": "Solicitar acesso pago ↗",
  "commercialDetails": "Licença comercial ↗",
  "systemLabel": "D25 / O SISTEMA MECÂNICO",
  "systemCaption": "Geometria real do CAD D25 · apresentação a 10° · laptop acima representado por seu volume",
  "railTitle": "Escolha o alcance.",
  "railText": "Trilhos padrão de 225 mm e uma alternativa de 175 mm para impressoras compactas. Trilhos menores reduzem a profundidade disponível para inserir o laptop.",
  "universalTitle": "Uma peça. Qualquer lado.",
  "universalText": "Componentes universais mantêm o sistema consistente. A mesma peça impressa serve à esquerda ou à direita.",
  "controlTitle": "Uma liberação deliberada.",
  "controlText": "Os controles laranja identificam onde interagir. Abra as travas frontais para inserir ou retirar o laptop; use os pinos indexados para definir a posição.",
  "keeper": "Retentores de borda",
  "keeperCaption": "Pino do retentor · Ø4 mm",
  "keeperTitle": "Ajuste uma vez.<br>Deslize no dia a dia.",
  "keeperText": "Quatro pequenas abas cobrem as bordas superiores do laptop, limitando o movimento para cima e para os lados. Na montagem, escolha a menor abertura que deixe o laptop livre, insira cada pino e gire um quarto de volta. As abas ficam ajustadas ao abrir as travas frontais para inserir ou retirar o laptop.",
  "keeperMetric": "4 aberturas do retentor",
  "keeperPlay": "Reproduzir ajuste do retentor",
  "assemblyLabel": "01 / MONTAGEM",
  "heroWidthRange": "80 mm / lado ↗",
  "oneTime": "Pagamento único",
  "digitalOnly": "Licença de uso pessoal · Somente arquivos digitais. Produto físico não incluído.",
  "checkoutPending": "Checkout em breve",
  "purchaseStatus": "Preço de US$19 para uso pessoal definido. O checkout online ainda não está aberto.",
  "buyPersonal": "Comprar por US$19 ↗",
  "purchaseReady": "Pagamento e entrega dos arquivos pelo checkout seguro. Licença de uso pessoal."
};
const en={buyPersonal:'Buy for US$19 ↗',purchaseReady:'Secure checkout and file delivery. Personal-use licence.'};$$('[data-i18n]').forEach(e=>en[e.dataset.i18n]=e.innerHTML);let lang='en';const presets={signature:{gray:'#8b9095',black:'#202225',orange:'#f57824'},chalk:{gray:'#d9d6cc',black:'#484b48',orange:'#c7623f'},graphite:{gray:'#484d50',black:'#202225',orange:'#b7bdbb'}};let colors={...presets.signature},basePixels,maskPixels;try{lang=localStorage.getItem('detent-language')==='pt'?'pt':'en';const p=JSON.parse(localStorage.getItem('detent-palette'));if(p&&Object.keys(colors).every(k=>/^#[0-9a-f]{6}$/i.test(p[k])))colors=p;}catch{}
function persist(k,v){try{localStorage.setItem(k,v)}catch{}}
function setLanguage(l){lang=l;document.documentElement.lang=l==='pt'?'pt-BR':'en';$('#language').value=l;$$('[data-i18n]').forEach(e=>e.innerHTML=(l==='pt'?pt:en)[e.dataset.i18n]??en[e.dataset.i18n]);persist('detent-language',l)}$('#language').onchange=e=>setLanguage(e.target.value);setLanguage(lang);
// Recolor in HSL so AgX highlights keep the selected hue.
// Identity colors preserve the exact source pixels and rendered shading.
function hsl(r,g,b){r/=255;g/=255;b/=255;const hi=Math.max(r,g,b),lo=Math.min(r,g,b),d=hi-lo,l=(hi+lo)/2;let h=0,s=0;if(d){s=d/(1-Math.abs(2*l-1));h=hi===r?((g-b)/d)%6:hi===g?(b-r)/d+2:(r-g)/d+4;h=(h/6+1)%1}return[h,s,l]}
function fromHsl(h,s,l){const c=(1-Math.abs(2*l-1))*s,x=c*(1-Math.abs((h*6)%2-1)),m=l-c/2;const i=Math.floor(h*6)%6,v=[[c,x,0],[x,c,0],[0,c,x],[0,x,c],[x,0,c],[c,0,x]][i];return v.map(n=>Math.round(255*(n+m)))}
const paletteHsl=h=>hsl(...[1,3,5].map(i=>parseInt(h.slice(i,i+2),16)));
function drawColors(){
 for(const k of Object.keys(colors)){$('#color-'+k).value=colors[k];$('#hex-'+k).textContent=colors[k].toUpperCase()}
 $$('[data-preset]').forEach(b=>{const yes=Object.keys(colors).every(k=>colors[k]===presets[b.dataset.preset][k]);b.classList.toggle('chosen',yes);b.setAttribute('aria-pressed',yes)});
 if(basePixels){
  const canvas=$('#color-preview'),ctx=canvas.getContext('2d'),out=new ImageData(new Uint8ClampedArray(basePixels.data),canvas.width,canvas.height),keys=Object.keys(colors),source=keys.map(k=>paletteHsl(presets.signature[k])),target=keys.map(k=>paletteHsl(colors[k]));
  for(let i=0;i<out.data.length;i+=4){const a=maskPixels.data;let k=-1;if(a[i]>200&&a[i+1]<40&&a[i+2]<40)k=0;else if(a[i+1]>200&&a[i]<40&&a[i+2]<40)k=1;else if(a[i+2]>200&&a[i]<40&&a[i+1]<40)k=2;
   if(k<0||colors[keys[k]].toLowerCase()===presets.signature[keys[k]])continue;
   const original=hsl(basePixels.data[i],basePixels.data[i+1],basePixels.data[i+2]),ref=source[k],to=target[k];
   const odds=(Math.max(.001,to[2])/(1-Math.min(.999,to[2])))/(ref[2]/(1-ref[2]));
   const light=original[2]*odds/(1-original[2]+original[2]*odds),sat=to[1]*Math.min(1,ref[1]>.025?original[1]/ref[1]:1),v=fromHsl(to[0],sat,light);
   for(let j=0;j<3;j++)out.data[i+j]=v[j];
  }ctx.putImageData(out,0,0)
 }persist('detent-palette',JSON.stringify(colors))
}
async function readPixels(url){const img=new Image();img.src=url;await img.decode();const c=document.createElement('canvas');c.width=1100;c.height=825;const x=c.getContext('2d');x.drawImage(img,0,0,c.width,c.height);return x.getImageData(0,0,c.width,c.height)}
Promise.all([readPixels('assets/renders/color-base.png?v=d25'),readPixels('assets/renders/color-mask.png?v=d25')]).then(([a,b])=>{basePixels=a;maskPixels=b;$('#loading').hidden=true;drawColors()}).catch(()=>{$('#loading').textContent='Preview unavailable.'});Object.keys(colors).forEach(k=>$('#color-'+k).oninput=e=>{colors[k]=e.target.value;drawColors()});$$('[data-preset]').forEach(b=>b.onclick=()=>{colors={...presets[b.dataset.preset]};drawColors()});drawColors();
let activeVideo;$$('[data-play-feature]').forEach(btn=>btn.onclick=()=>{const mode=btn.dataset.playFeature,section=$('[data-feature="'+mode+'"]');let video=section.querySelector('video');if(!video){video=document.createElement('video');video.src='assets/motion/'+mode+'.mp4?v=d25';video.muted=true;video.playsInline=true;video.preload='metadata';video.setAttribute('aria-label',mode+' adjustment preview');section.querySelector('.feature-player-slot').append(video);video.onloadedmetadata=()=>section.querySelector('.feature-seek').disabled=false;video.ontimeupdate=()=>{const v=video.duration?video.currentTime/video.duration:0;section.querySelector('.feature-seek').value=v*100;section.querySelector('.feature-progress').textContent=Math.round(v*100)+'%';section.querySelectorAll('[data-feature-phase]').forEach((x,i)=>x.classList.toggle('current',i===(v<.25?0:v<.8?1:2)))};video.onended=()=>btn.setAttribute('aria-pressed','false');section.querySelector('.feature-seek').oninput=e=>{video.pause();video.currentTime=video.duration*Number(e.target.value)/100;btn.setAttribute('aria-pressed','false')}}if(activeVideo&&activeVideo!==video){activeVideo.pause();activeVideo.closest('[data-feature]').querySelector('[data-play-feature]').setAttribute('aria-pressed','false')}activeVideo=video;section.querySelector('.feature-visual').classList.add('active');if(video.paused){if(video.ended)video.currentTime=0;video.play().catch(()=>{btn.setAttribute('aria-pressed','false');section.querySelector('.feature-loading').hidden=false;section.querySelector('.feature-loading').textContent=lang==='pt'?'Não foi possível reproduzir. Tente novamente.':'Playback unavailable. Please try again.'});btn.setAttribute('aria-pressed','true')}else{video.pause();btn.setAttribute('aria-pressed','false')}});

// Activate only a real hosted checkout. The paid file never travels through Pages.
(function configureCheckout(){
 const btn=document.querySelector('#personal-buy'),note=document.querySelector('#purchase-status');
 if(!btn||!note)return;
 const config=window.DETENT_STORE;
 if(!config||config.currency!=='USD'||config.personalPrice!==19||!config.personalCheckoutUrl)return;
 try{
  const url=new URL(config.personalCheckoutUrl);
  const providers={payhip:['payhip.com'],gumroad:['gumroad.com'],lemonsqueezy:['lemonsqueezy.com']};
  const allowed=providers[config.provider]||[];
  if(url.protocol!=='https:'||url.username||url.password||!allowed.some(h=>url.hostname===h||url.hostname.endsWith('.'+h)))return;
  if((config.provider==='payhip'&&!((url.pathname==='/buy'&&url.searchParams.get('link'))||/^\/b\/[^/]+/.test(url.pathname)))||(config.provider==='gumroad'&&!/^\/l\/[^/]+/.test(url.pathname))||(config.provider==='lemonsqueezy'&&!/^\/checkout\/buy\/[^/]+/.test(url.pathname)))return;
  btn.href=url.href;btn.rel='noopener';btn.classList.remove('checkout-pending');btn.dataset.i18n='buyPersonal';note.dataset.i18n='purchaseReady';setLanguage(lang);
 }catch{}
})();
