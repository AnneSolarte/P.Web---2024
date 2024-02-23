import gamingImg from '../resources/gaming.png'
import graficImg from '../resources/graficDesign.png'
import officeImg from '../resources/office.png'

export const data = {
  type: 'manzana',
  categoria: 'frutas',
  precio: 1.99,
  products: [{
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
    title: 'Office & Otters',
    src: officeImg,
    id: crypto.randomUUID()
  }]
}
