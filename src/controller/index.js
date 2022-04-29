const connection = require('../config/database')
// const logger = require('../config/logger')

async function handleListMessages(message, listType) {
    try {
        console.debug(`[${listType.toUpperCase()}] - new message recived`)
        const serializedMessage = JSON.parse(message.Body)

        const parsedMessage = {
            data_20_lockflag_of: listType == 'whitelist' ? 1 : null,
            data_20_name_na: serializedMessage.gate_name || '',
            data_20_person_no_pn: serializedMessage.access_code || '',
            data_20_surname_na: serializedMessage.sector_name || '',
            data_20_validfor_d1: '2022-04-30 00:01:00',
            data_20_validto_d2: '2022-04-30 23:59:59',
            data_20_version_vn: 14,
            data_freedef1: serializedMessage.ticket_type || '',
            prof_action: null,
            prof_name: serializedMessage.prof_name
        }
        const result = await connection('SIST_Pers_Import').insert(parsedMessage)

        console.log(`[${listType.toUpperCase()}]`)
    } catch(err) {
        console.error(`[${listType.toUpperCase()}]`, err)
    }     
}

module.exports = { handleListMessages }