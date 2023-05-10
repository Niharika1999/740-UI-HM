import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import StarBorderIcon from '@mui/icons-material/StarBorder';

function srcset(image, width, height, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${width * cols}&h=${height * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${width * cols}&h=${
      height * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function FoodInfo() {
  return (
    <ImageList
      sx={{
        width: 500,
        height: 450,
        // Promote the list into its own layer in Chrome. This costs memory, but helps keeping high FPS.
        transform: 'translateZ(0)',
      }}
      rowHeight={200}
      gap={1}
    >
      {itemData.map((item) => {
        const cols = item.featured ? 2 : 1;
        const rows = item.featured ? 2 : 1;

        return (
          <ImageListItem key={item.img} cols={cols} rows={rows}>
            <img
              {...srcset(item.img, 250, 200, rows, cols)}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar
              sx={{
                background:
                  'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
                  'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
              }}
              title={item.title}
              position="top"
              actionIcon={
                <IconButton
                  sx={{ color: 'white' }}
                  aria-label={`star ${item.title}`}
                >
                  <StarBorderIcon />
                </IconButton>
              }
              actionPosition="left"
            />
          </ImageListItem>
        );
      })}
    </ImageList>
  );
}

const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
    author: '@bkristastucchio',
    featured: true,
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger',
    author: '@rollelflex_graphy726',
  },
  {
    img: 'https://houston.culturemap.com/media-library/zalat-pizza-group-shot.jpg?id=31477541&width=2000&height=1500&quality=85&coordinates=0%2C0%2C0%2C0',
    title: 'Pizza',
    author: '@helloimnik',
  },
  {
    img: 'https://wendypolisi.com/wp-content/uploads/2022/05/SQ-mediterranean-quinoa-salad-5.jpg',
    title: 'Quinoa Salad',
    author: '@nolanissac',
  },
  {
    img: 'https://plantbasedandbroke.com/wp-content/uploads/2022/06/chickpeas-curry-naan-cilantro-1200x800-1.jpg',
    title: 'Chickpea Curry',
    author: '@hjrc33',
  },
  {
    img: 'https://www.cookingclassy.com/wp-content/uploads/2021/10/baked-sweet-potato-fries-12.jpg',
    title: 'Sweet Potato Fries',
    author: '@nolanissac',
  },
  {
    img: 'https://thecozyapron.com/wp-content/uploads/2019/12/fried-calamari_thecozyapron_1.jpg',
    title: 'Fried Calamari',
    author: '@hjrc33',
  },
  {
    img: 'https://cdn.loveandlemons.com/wp-content/uploads/2021/08/caprese-skewers.jpg',
    title: 'Caprese Skewers',
    author: '@nolanissac',
  },
  {
    img: 'https://hips.hearstapps.com/del.h-cdn.co/assets/18/11/2048x1152/hd-aspect-1520887294-cobb-salad-delish.jpg',
    title: 'Salad',
    author: '@hjrc33',
  },
  {
    img: 'https://minimalistbaker.com/wp-content/uploads/2019/01/Easy-Vegan-Pad-Thai-SQUARE.jpg',
    title: 'Vegan Pad Thai',
    author: '@arwinneil',
    featured: true,
  },
  {
    img: 'https://rainbowplantlife.com/wp-content/uploads/2023/01/tofu-stir-fry-cover-photo-1-of-1.jpg',
    title: 'Tofu Stir-Fry ',
    author: '@tjdragotta',
  },
  {
    img: 'https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_1:1/k%2Farchive%2F8bed88092f051b7bf354e35ab94d809cabd0821e',
    title: 'Lentil Soup',
    author: '@katie_wasserman',
  },
  {
    img: 'https://pixel.parall.ax/parallax-agency/image/upload/expose/cauldron-2018/site-images/20180517104049_lavash-wrap-v2.jpg',
    title: 'Falafel Wrap',
    author: '@silverdalex',
  },
  {
    img: 'https://www.foodandwine.com/thmb/ZufgGNDPs0PGAm5k6QfchQ-06iM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Bacon-Wrapped-Scallops-FT-RECIPE0822-2000-c8db2da365af4192a5d727f4db9b237c.jpg',
    title: 'Bacon-wrapped Scallops',
    author: '@shelleypauls',
  },
  {
    img: 'https://therecipecritic.com/wp-content/uploads/2019/08/vegetable_stir_fry.jpg',
    title: 'Vegetable Stir-Fry',
    author: '@peterlaster',
  },
  {
    img: 'https://lovingitvegan.com/wp-content/uploads/2022/04/Vegan-Chili-Square.jpg',
    title: 'Vegan Chili',
    author: '@southside_customs',
  },
  {
    img: 'https://tiramisuworldcup.com/wp-content/uploads/2020/09/200921_Press_Comunicato_ENG-1024x553.png',
    title: 'Tiramisu',
    author: '@arwinneil',
    featured: true,
  },
  {
    img: 'https://letthebakingbegin.com/wp-content/uploads/2020/12/Drunken-Cherry-Cake-Recipe-1-9.jpg',
    title: 'Chocolate Cake',
    author: '@rollelflex_graphy726',
  },
  {
    img: 'https://food.fnr.sndimg.com/content/dam/images/food/plus/fullset/2020/01/21/0/FN_FNP-Chang-Fresh-Fruit-Tart_s4x3.jpg.rend.hgtvcom.616.462.suffix/1579376157236.jpeg',
    title: 'Fruit Tart',
    author: '@helloimnik',
  },
  {
    img: 'https://www.thespruceeats.com/thmb/HM3X8w38eMVo0Lejx4GLvGHZ4dM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/gluten-free-new-york-cheesecake-1450985-hero-01-dc54f9daf38044238b495c7cefc191fa.jpg',
    title: 'Cheesecake',
    author: '@nolanissac',
  },
  {
    img: 'https://www.keep-calm-and-eat-ice-cream.com/wp-content/uploads/2022/08/Ice-cream-sundae-hero-11.jpg',
    title: 'Ice Cream Sundae',
    author: '@hjrc33',
  },
  
  {
    img: 'https://www.eatthis.com/wp-content/uploads/sites/4/media/images/ext/108098914/coca-cola-soda-ice.jpg?quality=82&strip=1',
    title: 'Classic Cola',
    author: '@arwinneil',
    featured: true,
  },
  {
    img: 'https://thefoodiephysician.com/wp-content/uploads/2021/07/fullsizeoutput_21a4-scaled.jpeg',
    title: 'Green Smoothie',
    author: '@silverdalex',
  },
  {
    img: 'https://bromabakery.com/wp-content/uploads/2016/02/Boozy-Ginger-Beer-Floats-683x1024.jpg',
    title: 'Ginger Beer',
    author: '@shelleypauls',
  },
  {
    img: 'https://www.cookwithmanali.com/wp-content/uploads/2017/05/Best-Mango-Mango-Lassi-Recipe.jpg',
    title: 'Mango Lassi',
    author: '@peterlaster',
  },
  {
    img: 'https://www.acouplecooks.com/wp-content/uploads/2022/04/Mint-Lemonade-006.jpg',
    title: 'Mint Lemonade',
    author: '@southside_customs',
  },
  
  {
    img: 'https://chefsarahelizabeth.com/wp-content/uploads/2018/02/Cherry-Fizz-Cocktail-1.jpg',
    title: 'Cherry Fizz',
    author: '@silverdalex',
  },
  {
    img: 'https://cdn.shopify.com/s/files/1/0752/2329/files/a_w_root_beer_large.jpg?13836292115281815891',
    title: 'Root Beer Classic',
    author: '@shelleypauls',
  },
  {
    img: 'https://honestcooking.com/wp-content/uploads/2011/04/NLM_OJSpritzer_HC.jpg',
    title: 'Orange Fizz',
    author: '@peterlaster',
  },
  {
    img: 'https://www.acouplecooks.com/wp-content/uploads/2021/12/Lemon-Soda-008-1s.jpg',
    title: 'Lemon-Lime',
    author: '@southside_customs',
  },
  {
    img: 'https://www.everydaycheapskate.com/wp-content/uploads/cold-brew-iced-coffee.jpg',
    title: 'Iced coffee',
    author: '@arwinneil',
    featured: true,
  },
];
