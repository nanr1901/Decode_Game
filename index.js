const key=document.getElementById('key');
key.style.display='flex';
key.style.alignItems='center';
key.style.justifyContent='center';
key.style.paddingTop='2rem';
key.style.fontSize='2rem';


const image1=document.getElementById('image1');
image1.style.display='flex';
image1.style.alignItems='center';
image1.style.justifyContent='center';

const image2=document.getElementById('image2');
image2.style.display='flex';
image2.style.alignItems='center';
image2.style.justifyContent='center';

const container = document.getElementById('container1');
container.style.display='flex';

for (let i = 0; i < 13; i++) {
  const div = document.createElement('div');
  div.textContent = String.fromCharCode(65 + i); 
  div.style.padding='0.8rem';
  div.style.width='1.5rem';
  div.style.border = '1px solid white';
  div.style.backgroundColor='black';
  div.style.color='white';
  container.appendChild(div);

}


for (let i = 0; i < 13; i++) {
    const div = document.createElement('div');
    const image=document.createElement('img');
    image.src='/Images/'+String.fromCharCode(65 + i)+'.png';
    image.style.width='1.5rem';
    div.style.padding='0.8rem';
    div.style.border = '1px solid black';
    div.classList.add('img1');
    div.appendChild(image);
    image1.appendChild(div);
  }



const container2=document.getElementById('container2');
container2.style.display='flex';
for (let i = 13; i < 26; i++) {
    const div = document.createElement('div');
    div.textContent = String.fromCharCode(65 + i);
    div.style.padding='0.8rem';
    div.style.width='1.5rem';
    div.style.border = '1px solid white';
  div.style.backgroundColor='black';
  div.style.color='white';
    container2.appendChild(div);
  
  }


  for (let i = 13; i < 26; i++) {
    const div = document.createElement('div');
    const image=document.createElement('img');
    image.src='/Images/'+String.fromCharCode(65 + i)+'.png';
    image.style.width='1.5rem';
    div.style.padding='0.8rem';
    div.style.border = '1px solid black';
    div.classList.add('img1');
    div.appendChild(image);
    image2.appendChild(div);
  }



const question=document.getElementById('question');
question.style.display='flex';
question.style.flexDirection='column';
question.style.alignItems='center';
question.style.justifyContent='center';
question.style.paddingTop='2rem';

for (let j=1;j<=8;j++)
{
const line1=document.getElementById('line'+j.toString());
line1.style.display='flex';
line1.style.flexDirection='row';
line1.style.alignItems='center';
line1.style.justifyContent='center';
}
const line1=document.getElementById('line1');
let arr1=['L','O','V','E','X','I','S','X','T','H','E'];
for (let i=0;i<11;i++)
{
    const div=document.createElement('input');
    div.style.border = '1px solid black';
    // div.style.padding='0.8rem';
    // div.style.width='1.5rem';
    // div.style.height='1.5rem';
    div.classList.add('media');
    div.id=arr1[i];
    div.addEventListener('input',checkValue);
    div.addEventListener('keydown', prevBox);
    if (i==4 || i==7)
    {
        div.style.backgroundColor='black';
    }
   
    line1.appendChild(div);
}
question.appendChild(line1);

const line2=document.getElementById('line2');
for (let i=0;i<11;i++)
{
    const div=document.createElement('div');
    div.classList.add('media');
    if (i==4 || i==7)
    {
        div.style.backgroundColor='black';
    }
    const tempimg=document.createElement('img');
    tempimg.src='/Images/'+arr1[i]+'.png';
    tempimg.classList.add('tempimg');
    div.appendChild(tempimg);
    line2.appendChild(div);
}
question.appendChild(line2);

const line3=document.getElementById('line3');
for (let i=0;i<11;i++)
{
    const div=document.createElement('div');
    div.classList.add('media');
    div.style.backgroundColor='black';
    line3.appendChild(div);
}
question.appendChild(line3);

let arr2=['R','E','A','L','X','N','A','T','U','R','E'];
const line4=document.getElementById('line4');
for (let i=0;i<11;i++)
{
    const div=document.createElement('input');
    div.classList.add('media');
    div.id=arr2[i];
    div.addEventListener('input',checkValue);
    div.addEventListener('keydown', prevBox);
    if (i==4)
    {
        div.style.backgroundColor='black';
    }

    line4.appendChild(div);
}
question.appendChild(line4);

const line5=document.getElementById('line5');
for (let i=0;i<11;i++)
{
    const div=document.createElement('div');
    div.classList.add('media');
    if (i==4)
    {
        div.style.backgroundColor='black';
    }

    const tempimg=document.createElement('img');
    tempimg.src='/Images/'+arr2[i]+'.png';
    tempimg.style.width='1.5rem';
    div.appendChild(tempimg);
    line5.appendChild(div);
}
question.appendChild(line5);

const line6=document.getElementById('line6');
for (let i=0;i<11;i++)
{
    const div=document.createElement('div');
    div.classList.add('media');
    div.style.backgroundColor='black';
    line6.appendChild(div);
}
question.appendChild(line6);

const line7=document.getElementById('line7');
let arr3=['O','F','X','M','A','N','K','I','N','D','X'];
for (let i=0;i<11;i++)   //line 7
{
    const div=document.createElement('input');
    div.classList.add('media');
    div.id=arr3[i];
    div.addEventListener('input',checkValue);
    div.addEventListener('keydown', prevBox);
    if (i==2 || i==10)
    {
        div.style.backgroundColor='black';
    }
    line7.appendChild(div);
}
question.appendChild(line7);

const line8=document.getElementById('line8');
for (let i=0;i<11;i++)
{
    const div=document.createElement('div');
    div.classList.add('media');
    if (i==2 || i==10)
    {
        div.style.backgroundColor='black';
    }
    const tempimg=document.createElement('img');
    tempimg.src='/Images/'+arr3[i]+'.png';
    tempimg.style.width='1.5rem';
    div.appendChild(tempimg);
    line8.appendChild(div);
}
question.appendChild(line8);




function checkValue()
{
    const input=this;
    if (this.value.length > 1) {
        this.value = this.value.slice(0, 1);
      }
    this.value=this.value.toUpperCase();
    const userInput=this.value.toUpperCase();
    let classname=input.id;
    console.log(classname);
    if (userInput===classname)
    {input.classList.add('correct');}
    else{
        input.classList.remove('correct');
    }


   if (input.value.length===1)
   {
    const nextInput=input.nextElementSibling;
    if (nextInput && nextInput.tagName=='INPUT')
    {
        nextInput.focus();
    }
   }

}

function prevBox(event) {
    const currentInput = event.target;
  
    if (event.keyCode === 8 && currentInput.value.length === 0) {
      const previousInput = currentInput.previousElementSibling;
  
      if (previousInput && previousInput.tagName === 'INPUT') {
        previousInput.focus();
      }
    }
  }