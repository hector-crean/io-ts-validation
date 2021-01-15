import * as t from 'io-ts'; 

export const users = t.type({
  data: t.array(t.type({
    first_name: t.string
  }))
});


//schema to hold the deepest of answers
export const answer = t.type({
  ans: t.number
});
