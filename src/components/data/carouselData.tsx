interface CarouselArray {

  id: number,
  title: string,
  imgUrl: string,

}

const carouselArray: CarouselArray[] = [
  {
    id: 1,
    imgUrl: 'https://picsum.photos/480/360?random=1',
    title: 'Picture One',
  },
  {
    id: 2,
    imgUrl: 'https://picsum.photos/480/360?random=2',
    title: 'Picture Two',
  },
  {
    id: 3,
    imgUrl: 'https://picsum.photos/480/360?random=3',
    title: 'Picture Three',
  },
  {
    id: 4,
    imgUrl: 'https://picsum.photos/480/360?random=4',
    title: 'Picture Four',
  },
];

export default carouselArray;
