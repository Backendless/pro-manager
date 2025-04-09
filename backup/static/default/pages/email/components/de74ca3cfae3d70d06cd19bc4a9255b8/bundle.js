define([], () => ({
  /* content */
  /* handler:onChange */
  ['onChange'](___arguments) {
      if (___arguments.value) {
    ___arguments.context.getComponentDataStoreByUid('8df5e86e263721a17d2eb9a2f1451d2c')['Protocol'] = 'SSL';
    ___arguments.context.getComponentDataStoreByUid('8df5e86e263721a17d2eb9a2f1451d2c')['SSL'] = true;
    ___arguments.context.getComponentDataStoreByUid('8df5e86e263721a17d2eb9a2f1451d2c')['TLS'] = false;
  } else {
    ___arguments.context.getComponentDataStoreByUid('8df5e86e263721a17d2eb9a2f1451d2c')['Protocol'] = 'TLS';
    ___arguments.context.getComponentDataStoreByUid('8df5e86e263721a17d2eb9a2f1451d2c')['TLS'] = true;
    ___arguments.context.getComponentDataStoreByUid('8df5e86e263721a17d2eb9a2f1451d2c')['SSL'] = false;
  }

  },
  /* handler:onChange */
  /* content */
}))
