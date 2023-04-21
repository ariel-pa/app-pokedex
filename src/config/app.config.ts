export const EnvConfiguration = () => ({
    environment: process.env.NODE_ENV || 'prod',
    mongodb: process.env.MONGODB,
    port: process.env.PORT || 3002,
    //verificar que sea entero (+) por en Joi es number pero al enviar es string
    default_limit: +process.env.DEFAULT_LIMIT || 7,
})