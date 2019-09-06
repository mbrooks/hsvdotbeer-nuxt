const STATUS_INITIAL = 'INITIAL'
const STATUS_LOADING = 'LOADING'
const STATUS_ERROR = 'ERROR'
const STATUS_SUCCESS = 'SUCCESS'

const storeRecord = records => (newRecord) => {
  const existingRecord = records.find(r => r.id === newRecord.id)

  if (existingRecord) {
    Object.assign(existingRecord, newRecord)
  } else {
    records.push(newRecord)
  }
}

const handleError = commit => (errorResponse) => {
  commit('SET_STATUS', STATUS_ERROR)
  commit('STORE_ERROR', errorResponse)
  throw errorResponse
}

const getOptionsQuery = (optionsObject = {}) =>
  Object.keys(optionsObject)
    .filter(k => typeof optionsObject[k] !== 'undefined')
    .map(k => `${k}=${encodeURIComponent(optionsObject[k])}`)
    .join('&')

const initialState = () => ({
  error: null,
  status: STATUS_INITIAL,
  links: {},
  count: 0,
  records: []
})

export const state = initialState

export const mutations = {
  SET_STATUS: (state, status) => {
    state.status = status
  },
  STORE_ERROR: (state, error) => {
    state.error = error
  },
  STORE_LINKS: (state, links) => {
    state.count = links.count
    state.links = links
  },
  STORE_RECORD: (state, newRecord) => {
    const { records } = state
    storeRecord(records)(newRecord)
  },
  STORE_RECORDS: (state, newRecords) => {
    const { records } = state
    newRecords.forEach(storeRecord(records))
  },
  RESET_STATE: (state) => {
    Object.assign(state, initialState())
  }
}

export const getters = {
  isLoading: state => state.status === STATUS_LOADING,
  isError: state => state.status === STATUS_ERROR,
  error: state => state.error,
  hasPrevious: state => !!state.links.prev,
  hasNext: state => !!state.links.next,
  all: state => state.records,
  byId: state => ({ id }) => state.records.find(r => r.id === id)
}

export const actions = {
  async loadPage ({ commit }, { options }) {
    commit('RESET_STATE')
    commit('SET_STATUS', STATUS_LOADING)
    const url = `beers/?${getOptionsQuery(options)}`
    await this.$axios
      .get(url)
      .then((res) => {
        if (res.status === 200) {
          commit('SET_STATUS', STATUS_SUCCESS)
          commit('STORE_RECORDS', res.data.results)
          commit('STORE_LINKS', {
            next: res.data.next,
            prev: res.data.prev,
            count: res.data.count
          })
        }
      })
      .catch(handleError(commit))
  },
  async loadNextPage ({ commit, state }) {
    await this.$axios
      .get(state.links.next)
      .then((res) => {
        if (res.status === 200) {
          commit('SET_STATUS', STATUS_SUCCESS)
          commit('STORE_RECORDS', res.data.results)
          commit('STORE_LINKS', {
            next: res.data.next,
            prev: res.data.prev,
            count: res.data.count
          })
        }
      })
      .catch(handleError(commit))
  }
}
