import React from 'react';
import { useQueryCollections } from '../../query-fns';

function Collection() {
  const collection = useQueryCollections();

  // Collection data will be accessible
  // here, using the mock server.
  // To manipulate this reponse object,
  // change ./src/mocks/handlers/collection.ts
  console.log('#############');
  console.log(collection.data);
  console.log('#############');

  return <p>{'<Collection page here />'}</p>;
}

export default Collection;
