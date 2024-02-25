import { v4 as uuidv4 } from 'uuid'
import gamingImg from '../resources/gaming.png'
import graficImg from '../resources/graficDesign.png'
import officeImg from '../resources/office.png'
import serviceImg from '../resources/service.png'

const dataSections = {
  product: {
    name: 'product',
    text: 'Wich type are you looking for?',
    items: [
      {
        title: 'Gaming',
        src: gamingImg,
        id: uuidv4()
      },
      {
        title: 'Grafic Design',
        src: graficImg,
        id: uuidv4()
      },
      {
        title: 'Office & Others',
        src: officeImg,
        id: uuidv4()
      }
    ]
  },
  service: {
    name: 'service',
    text: 'We provide more than high-tech products!',
    items: [
      {
        title: 'Life Guarantee',
        src: serviceImg,
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500.",
        id: uuidv4()
      },
      {
        title: 'Good Price',
        src: serviceImg,
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500.",
        id: uuidv4()
      },
      {
        title: 'Free Software Updates',
        src: serviceImg,
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500.",
        id: uuidv4()
      },
      {
        title: '24/7 Support',
        src: serviceImg,
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500.",
        id: uuidv4()
      }
    ]
  },
  member: {
    name: 'member',
    text: 'We proudly introduce our powerful members',
    items: [
      {
        title: 'Life Guarantee',
        src: serviceImg,
        id: uuidv4()
      },
      {
        title: 'Good Price',
        src: serviceImg,
        id: uuidv4()
      },
      {
        title: 'Free Software Updates',
        src: serviceImg,
        id: uuidv4()
      },
      {
        title: '24/7 Support',
        src: serviceImg,
        id: uuidv4()
      }
    ]
  }
}

export default dataSections
