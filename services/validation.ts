import { z } from 'zod'
const phoneRegExp = /^\+(?:[0-9] ?){6,14}[0-9]$/;

const signupSchema = z.object({
    firstName: z.string().min(3, 'First name is required'),
    lastName: z.string().min(3, 'Last name is required'),
    phone: z
      .string()
      .refine((value) => phoneRegExp.test(value), {
        message: 'Invalid phone number format',
      })
      .refine((value) => value.length >= 11, {
        message: 'Phone number should be at least 11 digits',
      }),
    email: z.string().email('Invalid email').min(3, 'Email is required'),
    password: z.string().min(8, 'Password is required'),
    // passwordStrength: z
    // .string()
    // .refine((value) => ['5%', '10%', '20%'].includes(value), {
    //   message: 'Invalid password strength',
    // }),
  });
const loginSchema = z.object({
    email: z.string().email('Invalid email').min(3, 'Email is required'),
    password: z.string().min(6, 'Password is required'),
  });
const requestOTPSchema = z.object({
    email: z.string().email('Invalid email').min(3, 'Email is required'),
  });
const newPasswordSchema = z.object({
    newPassword: z.string().min(6, 'Password is required'),
    confirmPassword: z.string().min(6, 'Password is required'),
  });
 
  const setAddressSchema = z.object({
    phone: z.string().min(11, 'Phone  Number is required'), // Assuming minimum length of 1 for phone number
    country: z.string().min(3, 'Country  Number is required'),
    address: z.string().min(3, 'Address  Number is required'),
    state: z.string().min(3),
    city: z.string().min(3),
    street_name: z.string().min(3),
    postal_code: z.string().min(5),
});

const InspectionSchema = z.object({
    date: z.string().min(3, 'Date is required'),
    time: z.string().min(3, 'Time is required'),
    notes: z.string().min(0, 'Notes is required'),
  });
  const reservationSchema = z.object({
    name: z.string().min(3, 'Name is required'),
    email: z.string().email('Invalid email').min(3, 'Email is required'),
    phone: z
    .string()
    .refine((value) => phoneRegExp.test(value), {
      message: 'Invalid phone number format',
    })
    .refine((value) => value.length >= 11, {
      message: 'Phone number should be at least 11 digits',
    }),
    address: z.string().min(3, 'Address is required'),
    country: z.string().min(3, 'Country is required'),
    state: z.string().min(3, 'State of Origin is required'),
    dob: z.string().min(3, 'Date of Birth is required'),
    gender: z.string().min(3, 'Gender is required'),
    occupation: z.string().min(0, 'Occupation is required'),
  });

  const PaymentSchema = z.object({
    mode_of_payment: z.string().min(3, 'Date is required'),
    method_of_payment: z.string().min(3, 'Time is required'),
    amount: z.string().min(0, 'Notes is required'),
  });

  const cardSchema = z.object({
    cardName: z.string().min(3, 'Card name is required'),
    cardNumber: z.string().min(11, 'card number is required'),
    cvv: z.string().min(3, 'cvv is required'),
    expDate: z.string().min(3, 'card expiry date is required')

  })
  const searchSchema = z.object({
    search: z.string().min(0, 'search'),
  })
  const editProfileSchema = z.object({
    firstName: z.string().min(3, 'first name is required'),
    lastName: z.string().min(3, 'last name is required'),
    email: z.string().min(3, 'first is required').email('Invalid email'),
    phone: z.string().min(3, 'phone is required')
  });

  const addMaterialSchema = z.object({
    name: z.string().min(3, 'Name is required'),
    description: z.string().min(3, 'Description is required'),
    price: z.string().min(1, 'Price is required'),
    discountPrice: z.string().optional(),
    processingDays: z.string().min(1, 'Processing Days is required'),
    deliveryMethod: z.string().min(3, 'Delivery Methods is required'),
    returnPolicy: z.string().min(3, 'Return Policy is required'),
    quantity: z.string().min(1, 'Quantity is required'),
  })

  const addLandSchema = z.object({
    title: z.string().min(3, 'Title is required'),
    address: z.string().min(3, 'Address is required'),
    // features: z.array(z.string()).min(0, 'At least one feature is required'),
    state: z.string().min(1, 'State is required'),
    city: z.string().min(1, 'City is required'),
    email: z.string().min(1, 'Email is required'),
    phone: z.string().min(1, 'Phone is required'),
    idType: z.string().min(1, 'IdType is required'),
    nationality: z.string().min(1, 'Nationality is required'),
    // bannerImage: z.string().min(1, 'Banner is required'),
    description: z.string().min(1, 'Description is required'),
    // plotDiagram: z.string().min(1, 'Plot Diagram is required'),
    layoutPlan: z.string().min(1, 'Layout is required'),
    numberOfPlots: z.string().min(1, 'Number of plots is required'),
    typeOfLand: z.string().min(1, 'Type of Land is required'),
    priceOfLand: z.string().min(1, 'Price of Land is required'),
    // encumbered: z.boolean(),
    // hasCourtCase: z.boolean()
  })

  const addHouseSchema = z.object({
      title: z.string().min(1),
      address: z.string().min(1),
      state: z.string().min(1),
      lga: z.string().min(1),
      email: z.string().min(6,),
      phone: z.string().min(11),
      idType: z.string().min(1),
      nationality: z.string().min(1),
      type: z.string().min(1),
      price: z.string().min(1),
      numberOfFlats: z.string().min(1), 
      // encumbered: z.boolean(), // Assuming encumbered is a boolean
      // hasCourtCase: z.boolean() // Assuming hasCourtCase is a boolean
  });

export { loginSchema, signupSchema,
   requestOTPSchema, newPasswordSchema,
    setAddressSchema, InspectionSchema,
    reservationSchema, PaymentSchema, cardSchema,
    editProfileSchema,searchSchema,  addMaterialSchema, addLandSchema,
    addHouseSchema
   }