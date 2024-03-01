import React from 'react';
import {
  Box,
  Stack,
  VStack,
  Heading,
  Button,
  HStack,
  Input,
  Text,
} from '@chakra-ui/react';
import { AiOutlineSend } from 'react-icons/ai';
import {
  AiFillGoogleCircle,
  AiFillYoutube,
  AiFillInstagram,
} from 'react-icons/ai';

const Footer = () => {
  return (
    // footer box started
    <Box bgColor={'blackAlpha.900'} minH={'40'} p={'16'} color={'white'}>
      <Stack
        h={'full'}
        p={'4'}
        alignItems={'center'}
        direction={['column', 'row']}
      >
        {/* VStack: used to stack elements in the vertical direction */}
        <VStack alignItems={'stretch'} w={'full'} px={'4'}>
          <Heading
            size={'md'}
            textTransform={'uppercase'}
            textAlign={['center', 'left']}
          >
            Subscribe to get updates
          </Heading>

          {/* HStack: used to stack elements in the horizontal direction */}
          {/* we have used hstack in vstack because hume subscribe to get updates ke liye email id chaiye jo hume uske neeche honi chaiye */}
          <HStack borderBottom={'2px solid white'} py={'2'}>
            <Input
              placeholder="Enter email here.."
              border={'none'}
              borderRadius={'none'}
              outline={'none'}
              focusBorderColor={'none'}
            />
            <Button
              p={'0'}
              colorScheme={'purple'}
              variant={'ghost'}
              borderRadius={'0 20px 20px 0'}
            >
              <AiOutlineSend size={'20'} />
            </Button>
          </HStack>
        </VStack>

        <VStack
          w={'full'}
          borderLeft={['none', '1px solid white']}
          borderRight={['none', '1px solid white']}
        >
          <Heading textTransform={'uppercase'} textAlign={'center'}>
            VIDEO HUB
          </Heading>
          <Text>All rights received</Text>
        </VStack>

        <VStack w={'full'}>
          <Heading size={'md'} textTransform={'uppercase'}>
            Social Media
          </Heading>
          <Button variant={'link'} colorScheme={'white'}>
            <AiFillYoutube />
            <a target={'blank'} href="https://www.youtube.com/">
              &nbsp;YouTube
            </a>
          </Button>

          <Button variant={'link'} colorScheme={'white'}>
            <AiFillInstagram />
            <a target={'blank'} href="https://www.instagram.com/">
              &nbsp;Instagram
            </a>
          </Button>

          <Button variant={'link'} colorScheme={'white'}>
            <AiFillGoogleCircle />
            <a target={'blank'} href="https://www.google.com/">
              &nbsp;Google
            </a>
          </Button>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;
