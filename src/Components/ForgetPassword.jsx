import React from 'react';
import {
  Button,
  Container,
  Heading,
  Input,
  VStack,
} from '@chakra-ui/react';


const ForgetPassword = () => {
  return (
    <Container maxW={'container.xl'} h={'100vh'} p={'16'}>
    <Heading>Basic static page, abhi backened ka kaam ni hua</Heading>
      <form>
        <VStack
          alignItems={'stretch'}
          spacing={'8'}
          w={['full', '96']}
          m={'auto'}
          my={'16'}
        >
          <Heading>Forgot Password ??</Heading>
          <Input
            placeholder={'Email'}
            type={'email'}
            required
            focusBorderColor={'purple.500'}
          />

          <Input
            placeholder={'Enter new Password'}
            type={'password'}
            required
            focusBorderColor={'purple.500'}
          />

          <Input
            placeholder={'Confirm new Password'}
            type={'password'}
            required
            focusBorderColor={'purple.500'}
          />

          <Button colorScheme={'purple'} type={'submit'}>
            Log In
          </Button>
        </VStack>
      </form>
    </Container>
  );
};

export default ForgetPassword;
