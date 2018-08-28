<template>
  <div class="home">
    <img alt="Giant logo" src="../assets/logo.png">
  </div>
</template>

<script>

export default {
  name: 'home',
  data() {
    return {
      isConnected: false,
      socketMessage: '',
    };
  },

  sockets: {
    connect() {
      // Fired when the socket connects.
      this.isConnected = true;
    },

    disconnect() {
      this.isConnected = false;
    },

    // Fired when the server sends something on the "messageChannel" channel.
    messageChannel(data) {
      this.socketMessage = data;
    },
  },

  methods: {
    pingServer() {
      // Send the "pingServer" event to the server.
      this.$socket.emit('pingServer', 'PING!');
    },
  },
  // methods: {
  //   async get() {
  //     this.axios.get('/api/nodes').then(response => {
  //       console.log('response', response);
  //     });
  //   },
  // },
  mounted() {
    // console.log('this', this);
    // this.get();
  },
};
</script>
