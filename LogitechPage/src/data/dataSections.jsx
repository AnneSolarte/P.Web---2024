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
import img from '../resources/img.png'

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
        title: 'Life Guarantee',
        src: member1,
        id: crypto.randomUUID()
      },
      {
        title: 'Good Price',
        src: member2,
        id: crypto.randomUUID()
      },
      {
        title: 'Free Software Updates',
        src: member3,
        id: crypto.randomUUID()
      },
      {
        title: '24/7 Support',
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
        src: img,
        id: crypto.randomUUID()
      },
      {
        text: 'supportQtechgear.com',
        src: img,
        id: crypto.randomUUID()
      }

    ],
    media: [
      {
        src: img,
        id: crypto.randomUUID()
      },
      {
        src: img,
        id: crypto.randomUUID()
      },
      {
        src: img,
        id: crypto.randomUUID()
      },
      {
        src: img,
        id: crypto.randomUUID()
      },
      {
        src: img,
        id: crypto.randomUUID()
      }

    ]
  }
}

export default dataSections
