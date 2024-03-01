import { Box, Container, Heading, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import img1 from '../Assets/1.jpg';
import img2 from '../Assets/2.jpg';
import img3 from '../Assets/3.jpg';
import img4 from '../Assets/4.jpg';
import img5 from '../Assets/5.png';
import { Image } from '@chakra-ui/react';

const headingOptions = {
  pos: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate(-50% ,-50%)',
  textTransform: 'uppercase',
  p: '4',
  size: '4xl',
};

const Home = () => {
  return (
    <Box>
      <MyCarousel />
      <Container maxW={'container.xl'} minH={'100vh'} p="16">
        <Heading
          textTransform={'uppercase'}
          w={'fit-content'}
          py="2"
          borderBottom={'2px solid'}
          m={'auto'}
        >
          Services
        </Heading>

        <Stack
        h={'full'}
        p={'4'}
        alignItems={'center'}
        direction={["column", 'row']}
        >
        <Image 
        src={img5} 
        filter={'hue-rotate(-130deg)'} 
        h={["40", "400"]}
        />
        <Text
        letterSpacing={'widest'} 
        lineHeight={"190%"}
        padding={['4', '16']}
        textAlign={'center'}
        >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius eos assumenda obcaecati quam soluta enim eveniet, est, maxime error, voluptates atque optio officiis! Harum obcaecati voluptates aperiam, inventore ipsam repudiandae, nostrum quae alias eligendi deleniti iure, libero magnam id pariatur dolor soluta iusto labore modi ullam molestiae totam placeat? Suscipit maxime excepturi neque veniam maiores! Consequuntur ab voluptatem voluptatibus! Velit nihil quisquam optio similique aliquid assumenda quidem quos, explicabo consequatur ex minus ducimus ipsam illum quo aperiam exercitationem ut pariatur eos doloribus numquam ipsa tenetur. Praesentium, neque accusantium beatae fugiat doloribus nobis magnam id voluptatem assumenda quibusdam eos officia nihil.
        </Text>
        </Stack>

      </Container>
    </Box>
  );
};

const MyCarousel = () => (
  <Carousel
    autoPlay
    infiniteLoop
    interval={1000}
    showStatus={false}
    showThumbs={false}
    showArrows={false}
  >
    <Box w="full" h={'100vh'}>
      <Image src={img1} h="full" w={"full"} objectFit={"cover"}/>
      <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
        Watch the Future!!
      </Heading>
    </Box>

    <Box w="full" h={'100vh'}>
      <Image src={img2} h="full" w={"full"} objectFit={"cover"}/>
      <Heading bgColor={'whiteAlpha.900'} color={'black'} {...headingOptions}>
        Future is gaming!
      </Heading>
    </Box>

    <Box w="full" h={'100vh'}>
      <Image src={img3} h="full" w={"full"} objectFit={"cover"}/>
      <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>
        Gaming on console!
      </Heading>
    </Box>

    <Box w="full" h={'100vh'}>
      <Image src={img4} h="full" w={"full"} objectFit={"cover"}/>
      <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>
        Night life is cool!!
      </Heading>
    </Box>
  </Carousel>
);

export default Home;
