export type User = {
  id: number
  company_id: number,
  name: string
  age: number
  profile: string
}

export const useUserService = () => ({
  list: async (): Promise<{ success: boolean, data: User[] }> => {
    return new Promise((res) => {
      setTimeout(() => {
        res({
          success: true, data: [
            { id: 1, company_id: 1, name: 'Marco', age: 33, profile: 'Frontend engineer, loves coding with VueJS and TypeScript, cooking and hikking' },
            { id: 2, company_id: 2, name: 'John Doe', age: 25, profile: 'The Boss!' },
            { id: 3, company_id: 3, name: 'John Wick', age: 33, profile: 'Loves dogs' },
          ]
        })
      }, 100)
    })
  },
  delete: async (id: number): Promise<{ success: boolean, user: { id: number } }> => {
    return new Promise((res) => {
      setTimeout(() => {
        res({ success: true, user: { id } })
      }, 100)
    })
  }
})
