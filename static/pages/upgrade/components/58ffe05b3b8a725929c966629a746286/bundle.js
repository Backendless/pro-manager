define([], () => ({
  /* content */
  /* handler:onClick */
  async onClick(___arguments) {
      await Backendless.Messaging.publish('bl-server-logs', 'Hello I\'m some button ', new Backendless.PublishOptions({ subtopic: '' }), new Backendless.DeliveryOptions({ publishPolicy: 'PUBSUB' }));

  },
  /* handler:onClick */
  /* content */
}))
