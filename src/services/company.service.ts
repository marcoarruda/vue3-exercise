export type Company = {
  id: number
  name: string
}

export const useCompanyService = () => ({
  list: async (): Promise<{ success: boolean, data: Company[] }> => {
    return new Promise((res) => {
      setTimeout(() => {
        res({
          success: true, data: [
            { id: 1, name: 'Company 01' },
            { id: 2, name: 'Company 02' },
            { id: 3, name: 'Company 03' },
            { id: 4, name: 'Company 04' },
          ]
        })
      }, 100)
    })
  }
})
