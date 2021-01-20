// pattern matching example
  
  export interface IntBrand {
    readonly Int: unique symbol
  }
  
  export type Int = number & IntBrand
  
  export interface Person {
    name: string
    age: Int
  }

export type User = { type: 'Anonymous' } | { type: 'LoggedIn'; person: Person }

export const match = <R>(
    onAnonymous: () => R, 
    onLoggedIn: (person: Person) => R
) => (user: User): R => {
  switch (user.type) {
    case 'Anonymous':
      return onAnonymous()
    case 'LoggedIn':
      return onLoggedIn(user.person)
  }
}