const connection = require('../config/database')
// const logger = require('../config/logger')

async function handleWhiteListMessages(message) {
    try {
        console.debug(`[WHITELIST] - new message recived`)
        const serializedMessage = JSON.parse(message.Body)

        const parsedMessage = {
            data_20_lockflag_of: 1,
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

        console.log('insert success ', result)
    } catch(err) {
        console.error(err)
    }     
}

module.exports = { handleWhiteListMessages }