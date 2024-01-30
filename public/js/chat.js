const socket = io()

socket.on('countUpdated', (count) => {
    console.log('The count has benn updated!', count)
})

document.querySelector('#increment').addEventListener('click', () => {
    console.log('Clicked!')
    socket.emit('increment')
})