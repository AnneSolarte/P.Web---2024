import gamingImg from '../resources/gaming.png'
import graficImg from '../resources/graficDesign.png'
import officeImg from '../resources/office.png'
import serviceImg from '../resources/service.png'
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
        src: serviceImg,
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500.",
        id: crypto.randomUUID()
      },
      {
        title: 'Good Price',
        src: serviceImg,
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500.",
        id: crypto.randomUUID()
      },
      {
        title: 'Free Software Updates',
        src: serviceImg,
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500.",
        id: crypto.randomUUID()
      },
      {
        title: '24/7 Support',
        src: serviceImg,
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500.",
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
        src: serviceImg,
        id: crypto.randomUUID()
      },
      {
        title: 'Good Price',
        src: serviceImg,
        id: crypto.randomUUID()
      },
      {
        title: 'Free Software Updates',
        src: serviceImg,
        id: crypto.randomUUID()
      },
      {
        title: '24/7 Support',
        src: serviceImg,
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
