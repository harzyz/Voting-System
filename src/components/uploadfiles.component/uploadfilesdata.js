import peterobi from '../../images/peter obi 2.png'
import obasanjo from '../../images/obasanjo 2 2.png'
import tinubu from '../../images/bola ahmed tinubu 2.png'
import atiku from '../../images/atiku 2.png'

export const UploadFilesData = [
  {
    id: 1,
    image: `${peterobi}`,
    imagepath: 'Photo 1.jpg',
    alternative: 'Peter Obi',
    status: '2.7MB of 5MB'
  },
  {
    id: 2,
    image: `${obasanjo}`,
    imagepath: 'Photo 2.jpg',
    alternative: 'Olusegun Obasanjo',
    status: 'Queued...'
  },
  {
    id: 3,
    image: `${tinubu}`,
    imagepath: 'Photo 3.jpg',
    alternative: 'Bola Ahmed Tinubu',
    status: 'Queued...'
  },
]
export const CompletedUpload = [
  {
    id: 1,
    image: `${atiku}`,
    imagepath: 'Photo 1.jpg',
    alternative: 'Atiku Abubakar',
    status: 'Completed'
  }
]