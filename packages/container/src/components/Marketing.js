import React, {useEffect, useRef} from 'react';
import {mount} from 'marketing/Marketing';

export const Marketing = () => {
  const node = useRef(null);

  useEffect(() => {
    mount(node.current)
  }, [])

  return <div ref={node}/>
};
