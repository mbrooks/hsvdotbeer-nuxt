const storeRecord = records => (newRecord) => {
  const existingRecord = records.find(r => r.id === newRecord.id)

  if (existingRecord) {
    Object.assign(existingRecord, newRecord)
  } else {
    records.push(newRecord)
  }
}

export const state = () => ({
  records: [],
  count: 0
})

export const mutations = {
  STORE_RECORD: (state, newRecord) => {
    const { records } = state
    storeRecord(records)(newRecord)
  },
  STORE_RECORDS: (state, newRecords) => {
    const { records } = state
    newRecords.forEach(storeRecord(records))
  }
}

export const actions = {
  async load ({ commit }) {
    const url = `venues/`
    await this.$axios.get(url).then((res) => {
      if (res.status === 200) {
        commit('STORE_RECORDS', res.data.results)
      }
    })
  }
}
