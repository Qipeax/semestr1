import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button, Box } from '@mui/material';
import { motion } from 'framer-motion';
import { useDispatch } from 'react-redux';
import { addToCart } from '../features/cartSlice';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card sx={{ maxWidth: 345, margin: 2, boxShadow: 3, position: 'relative' }}>
        {/* Рейтинг товара */}
        <Box
          sx={{
            position: 'absolute',
            top: 8,
            right: 8,
            backgroundColor: 'rgba(255, 255, 255, 0.8)', // Белый фон с прозрачностью
            padding: '4px 8px', // Увеличиваем padding по горизонтали
            borderRadius: '4px',
            zIndex: 1, // Убедитесь, что рейтинг отображается поверх изображения
            fontSize: '0.875rem', // Задаем размер шрифта
            fontWeight: 'bold',   // Делаем текст жирным
            color: '#333',         // Задаем цвет текста
          }}
        >
          {product.rating ? product.rating.toFixed(1) : 'Нет рейтинга'}
        </Box>

        <CardMedia
          component="img"
          height="140"
          image={product.image}
          alt={product.title}
        />
        <CardContent>
          <Typography variant="h6">{product.title}</Typography>
          <Typography variant="body2">{product.description}</Typography>
          <Typography variant="h5">{product.price}руб</Typography>
          <Button
            variant="contained"
            onClick={() => dispatch(addToCart(product))}
            sx={{ mt: 2 }}
          >
            Добавить в корзину
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ProductCard;