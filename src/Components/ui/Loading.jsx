import React from 'react'
import { Flex, Loader } from '@mantine/core';
import '@mantine/core/styles.css';
function Loading() {
  return (
    <Flex align={'center'} justify={'center'}  mih="100vh"><Loader color="blue" size={50}/></Flex>
  )
}

export default Loading