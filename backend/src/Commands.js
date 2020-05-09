const lgtv2 = require('lgtv2')({ url: 'ws://192.168.1.59:3000' })

module.exports = { 
    setVolume(req, res) {
        const id = req.params.id
        
        if(id === '0') lgtv2.request('ssap://audio/volumeDown')
        if(id === '1') lgtv2.request('ssap://audio/volumeUp')
    },

    launchApp(req, res) {
        const id = req.params.id
    
        if(id === '0') lgtv2.request('ssap://system.launcher/launch', { id: 'youtube.leanback.v4' })
        if(id === '1') lgtv2.request('ssap://system.launcher/launch', { id: 'netflix' })
        if(id === '2') lgtv2.request('ssap://system.launcher/launch', { id: 'amazon' })
    },

    mediaControls(req, res) {
        const id = req.params.id
    
        if(id === '0') lgtv2.request('ssap://media.controls/rewind')
        if(id === '1') lgtv2.request('ssap://media.controls/fastForward')
        if(id === '2') lgtv2.request('ssap://media.controls/play')
        if(id === '3') lgtv2.request('ssap://media.controls/pause')
    }
}