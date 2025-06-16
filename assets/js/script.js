const btnPlay = document.querySelector('#button .mulai')
const messege = document.querySelector('.messege-box')
const messege1 = document.querySelector('.messege-box1')
const messege2 = document.querySelector('.messege-box2')
const messege2P = document.querySelector('.messege-box2 .pesan p')
const hilang1 = document.querySelector('.hilang1')
const hilang2 = document.querySelector('.hilang2')
const nama = document.querySelectorAll('.nama h2')[0]
const nama1 = document.querySelectorAll('.nama h2')[1]
const waktu = document.getElementById('waktu')
const jam = waktu.querySelector('h1')
const hari = waktu.querySelector('p')
const bg1 = document.querySelector('.background1')
const bg2 = document.querySelector('.background2')
const body = document.querySelector('.body')
const audio = document.querySelector('.audio')

body.classList.add('background1')

const date = new Date()
const hour = String(date.getHours()).padStart(2, '0')
const minutes = String(date.getMinutes()).padStart(2, '0')
const day = date.getDay()
const tgl = date.getDate()
const month = date.getMonth()
const year = date.getFullYear()

hari.innerHTML = `${dayID()}, ${tgl} ${monthID()} ${year}`
jam.innerHTML = `${hour}:${minutes}`

// Dirubah 
const pengirim = "정일";
const nomorWa = "6281902448564" // awalan nomor 0 harus di awalin 62
// const pesan = `qyu jangan marah lama lama yah qyu aku takut qyu :(, qyu harus kembali berseyum lagi qyu :), aku janji tidak seperti ini lagi qyu, maafin aku nya yah qyu.`;
const pesan = `큐리미 귀여워, 이제 나한테 화내지 마 :) 다시 웃어줘 :)`;

if (pengirim) {
  nama.innerHTML = pengirim;
  nama1.innerHTML = pengirim;
} else {
  nama.innerHTML = "Nama Kamu";
  nama1.innerHTML = "Nama Kamu";
}

btnPlay.addEventListener('click', () => {
  audio.play()
  messege1.style.display = "block";
  messege1.style.transform = "translateX(0)"
  btnPlay.style.display = "none";
  hilang1.style.display = "block";
})

hilang1.addEventListener('click', () => {
  messege1.style.display = "none";
  messege2.style.transform = "translateX(0)"
  hilang1.style.display = "none"
  hilang2.style.display = "block"
  Swal.fire({
    imageUrl: "/assets/img/tenor.gif",
    imageHeight: 120,
    title: '큐유리미, 정일이 미안해 :( 큐유리미',
    // title: 'Qyurimy, Jeong Il Minta Maaf ya :( Qyurimy',
    html: `<input type="text" id="login" class="swal2-input" placeholder="Please type 'ok'">`,
    confirmButtonText: 'Send',
    focusConfirm: false,
    preConfirm: () => {
      const login = Swal.getPopup().querySelector('#login').value
      if (!login) {
        Swal.showValidationMessage(`Qyurimy`)
      }
      return { login }
    }
  }).then((result) => {
    let i = 0;
    const speed = 50;
    const namaAwal = result.value.login.charAt(0)
    // let txt = `Qyu, baba mau minta maaf kepada ${result.value.login}, karena hari ini baba membuat Qyu marah, kesal, dan badmood. ${pesan}`;
    let txt = `큐리미 귀여워, 내가 너를 실망시킨 걸 알아. 
    그래서 정말 진심으로 미안해. 널 아프게 하거나 슬프게 하려던 건 절대 아니었어. 
    나는 가끔 실수도 하는 평범한 사람이야. 정말 미안해. 더 나은 사람이 되고, 
    더 배려심 있는 사람이 되도록 노력할게. 그러니까 이제 나한테 화내지 말아줘 :) 
    큐리미는 다시 웃어야 해요 :)`;

    const typeWriter = () => {
      if (i < txt.length) {
        messege2P.innerHTML += txt.charAt(i);
        i++;
        messege2.classList.remove('kelip')
        hilang2.style.display = "none"
        setTimeout(typeWriter, speed)
      } else {
        messege2.classList.add('kelip')
        body.classList.replace('background1', 'background2')
        body.classList.add('muncul')
        hilang2.style.display = "block"
      }
    }
    typeWriter()


  })
})

hilang2.addEventListener('click', () => {
  window.open(`https://wa.me/${nomorWa}`, '_blank')
})

