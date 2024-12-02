import Joi from 'joi';

// In validation.middleware.js
export const validate = (schema) => (req, res, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }
    next();
};

//export default validate; // Change to default export

export const userValidationSchema = Joi.object({
    name: Joi.string().trim().required().messages({
        'any.required': 'Name is required',
        'string.empty': 'Name cannot be empty',
    }),
    email: Joi.string().email().required().messages({
        'any.required': 'Email is required',
        'string.email': 'Invalid email format',
    }),
    password: Joi.string().min(6).required().messages({
        'any.required': 'Password is required',
        'string.min': 'Password must be at least 6 characters long',
    }),
    role: Joi.string().valid('admin', 'guest').default('guest').messages({
        'any.only': 'Role must be either admin or guest',
    }),
});

export const bookValidationSchema = Joi.object({
    title: Joi.string().trim().required().messages({
        'any.required': 'Title is required',
        'string.empty': 'Title cannot be empty',
    }),
    author: Joi.alternatives()
        .try(Joi.string(), Joi.array().items(Joi.string()))
        .required()
        .messages({
            'any.required': 'Author is required',
            'alternatives.match': 'Author must be a string or an array of strings',
        }),
    genre: Joi.string().trim().required().messages({
        'any.required': 'Genre is required',
        'string.empty': 'Genre cannot be empty',
    }),
    quantity: Joi.number().integer().min(1).required().messages({
        'any.required': 'Quantity is required',
        'number.min': 'Quantity must be at least 1',
        'number.base': 'Quantity must be a number',
    }),
});

export const borrowValidationSchema = Joi.object({
    bookId: Joi.string().required().messages({
        'any.required': 'Book ID is required',
        'string.base': 'Book ID must be a string',
    }),
    userId: Joi.string().required().messages({
        'any.required': 'User ID is required',
        'string.base': 'User ID must be a string',
    }),
    dueDate: Joi.date().greater('now').optional().messages({
        'date.greater': 'Due date must be in the future',
    }),
});
