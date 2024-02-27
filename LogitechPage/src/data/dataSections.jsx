import gamingImg from '../resources/gaming.png'
import graficImg from '../resources/graficDesign.png'
import officeImg from '../resources/office.png'
import service1 from '../resources/service1.png'
import service2 from '../resources/service2.png'
import service3 from '../resources/service3.png'
import service4 from '../resources/service4.png'
import member1 from '../resources/member1.png'
import member2 from '../resources/member2.png'
import member3 from '../resources/member3.png'
import member4 from '../resources/member4.png'
import social1 from '../resources/whats_icon.png'
import social2 from '../resources/insta_icon.png'
import social3 from '../resources/twitter.png'
import social4 from '../resources/telegram_icon.png'
import social5 from '../resources/git_icon.png'
import chanel1 from '../resources/phone_icon.png'
import chanel2 from '../resources/email_icon.png'

const dataSections = {
  product: {
    type: 'product',
    title: 'PRODUCTS',
    text: 'Wich type are you looking for?',
    id: crypto.randomUUID(),
    items: [
      {
        title: 'Gaming',
        src: gamingImg,
        id: crypto.randomUUID()
      },
      {
        title: 'Grafic Design',
        src: graficImg,
        id: crypto.randomUUID()
      },
      {
        title: 'Office & Others',
        src: officeImg,
        id: crypto.randomUUID()
      }
    ]
  },
  service: {
    type: 'service',
    title: 'SERVICES',
    id: crypto.randomUUID(),
    text: 'We provide more than high-tech products!',
    items: [
      {
        title: 'Life Guarantee',
        src: service1,
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500. Lorem Ipsum has been the industry's standard dummy.",
        id: crypto.randomUUID()
      },
      {
        title: 'Good Price',
        src: service2,
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500. Lorem Ipsum has been the industry's standard dummy.",
        id: crypto.randomUUID()
      },
      {
        title: 'Free Software Updates',
        src: service3,
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500. Lorem Ipsum has been the industry's standard dummy.",
        id: crypto.randomUUID()
      },
      {
        title: '24/7 Support',
        src: service4,
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500. Lorem Ipsum has been the industry's standard dummy.",
        id: crypto.randomUUID()
      }
    ]
  },
  member: {
    type: 'member',
    title: 'MEMBERS',
    text: 'We proudly introduce our powerful members',
    id: crypto.randomUUID(),
    items: [
      {
        title: 'Electros Softwares',
        src: member1,
        id: crypto.randomUUID()
      },
      {
        title: 'Tera Tech Lab',
        src: member2,
        id: crypto.randomUUID()
      },
      {
        title: 'TC Predator Gaming',
        src: member3,
        id: crypto.randomUUID()
      },
      {
        title: 'SpacePlay',
        src: member4,
        id: crypto.randomUUID()
      }
    ]
  },
  contact: {
    type: 'contact',
    title: 'CONTACTS',
    text: 'Some ways for you to contact us ',
    id: crypto.randomUUID(),
    channels: [
      {
        text: '+509 1234 567',
        src: chanel1,
        id: crypto.randomUUID()
      },
      {
        text: 'support@logitech.com',
        src: chanel2,
        id: crypto.randomUUID()
      }

    ],
    media: [
      {
        src: social1,
        id: crypto.randomUUID()
      },
      {
        src: social2,
        id: crypto.randomUUID()
      },
      {
        src: social3,
        id: crypto.randomUUID()
      },
      {
        src: social4,
        id: crypto.randomUUID()
      },
      {
        src: social5,
        id: crypto.randomUUID()
      }

    ]
  }
}

export default dataSections
