import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';

export default function RoomsInfo() {
  return (
    <ImageList sx={{ width: 500, height: 450 }}>
      {itemData.map((item) => (
        <ImageListItem
          key={item.img}
          style={{ transform: 'scale(1)', transition: 'transform 0.3s' }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.2)')}
          onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
        >
          <img
            src={`${item.img}?w=248&fit=crop&auto=format`}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
            subtitle={item.author}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${item.title}`}
              >
                <InfoIcon />
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: 'https://webrezpro.com/wp-content/uploads/2021/03/Covid19HotelLobby.jpg',
    title: 'Hotel Lobby',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://image-tc.galaxy.tf/wijpeg-e6z7wbn1ywf0xvz873sk7ph2w/single-room.jpg',
    title: 'Single Room',
    author: '$65.00',
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: 'https://www.twahotel.com/sites/default/files/2019-07/standard-king-large.jpg',
    title: 'Standard Room',
    author: '$80.00 ',
  },
  {
    img: 'https://www.worldcenterhotel.com/wp-content/uploads/sites/6/2017/06/622_SUPERIOR-CQ_5460.jpg?ch=Width,DPR',
    title: 'Superior Room',
    author: '$95.00 ',
  },
  {
    img: 'https://media.timeout.com/images/103654033/image.jpg',
    title: 'Family Room',
    author: '$140.00',
    cols: 2,
  },
  {
    img: 'https://i.travelapi.com/lodging/4000000/3630000/3630000/3629903/beaf29f5_z.jpg',
    title: 'Deluxe Room',
    author: '$150.00 ',
    cols: 2,
  },
  {
    img: 'https://www.halekulani.com/wp-content/uploads/2022/02/HKU_Ocean-View-King-1024x683.jpg',
    title: 'Ocean View Room',
    author: '$175.00 ',
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: 'https://d2e5ushqwiltxm.cloudfront.net/wp-content/uploads/sites/51/2016/10/16044824/Room-C_004-e1563551718755.jpg',
    title: 'Junior Suite',
    author: '$180.00 ',
  },
  {
    img: 'https://cache.marriott.com/content/dam/marriott-renditions/OOLSP/oolsp-executive-6750-hor-clsc.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=1846px:*',
    title: 'Executive Suite',
    author: '$265.00 ',
  },
  {
    img: 'https://cdn.vacatia.com/propertyresidence/20/4/20447/wm_thumb_770x513_standard-room-1-king-bed-garden-view-5cc9afc2defc8.jpg',
    title: 'Garden View Room',
    author: '$270.00',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://img.bizbash.com/files/base/bizbash/bzb/image/2019/07/Upstairs_Living_Room_se.1.5d3b38832aa1e.png?auto=format%2Ccompress&fit=max&q=70&rect=0%2C201%2C1920%2C1080&w=1200',
    title: 'Presidential Suite',
    author: '$695.00 ',
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPGMQd2b66HXsttGfwJDirYW5aosw5UycwxZG8UygprR6PWuK8MlfqcO0wHMDaB8XkBGQ&usqp=CAU',
    title: 'Penthouse Suite',
    author: '$715.00 ',
  },
  {
    img: 'https://www.ihcltata.com/content/dam/Sukh-Niwas-Suite.jpg',
    title: 'Luxury Suite',
    author: '$725.00 ',
    cols: 2,
  },
  {
    img: 'https://image-tc.galaxy.tf/wijpeg-50lamir8cuyzobq0v0ycntzyo/presidentialdining2-high-res_standard.jpg?crop=104%2C0%2C1712%2C1284',
    title: 'Royal Suite',
    author: '$755.00 ',
    rows: 2,
    cols: 2,
  },
];