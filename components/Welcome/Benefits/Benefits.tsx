import catalogImage from '@/public/img/catalog.jpg';
import commentImage from '@/public/img/comment.jpg';
import fastImage from '@/public/img/fast.jpg';
import cashbackImage from '@/public/img/cashback.jpg';

import { BenefitsItem } from './BenefitsItem/BenefitsItem';
import { Container } from '@/components/UI/Container/Container';

const Benefits = () => {
  return (
    <Container>
      <h2 className="text-center text-2xl sm:text-3xl md:ext-4xl font-bold">Benefits</h2>
      <ul className="flex flex-wrap justify-center gap-10">
        <BenefitsItem
          src={catalogImage}
          alt="catalog"
          text="Welcome to our store, where your shopping experience becomes even more enjoyable! We offer a convenient catalog where each item is meticulously presented with all the necessary details. But that's not all! We provide a wide range of discounts so that you can purchase what you need at an exciting price. We give you the opportunity to make advantageous purchases and savor the process of selection!"
        />
        <BenefitsItem
          src={commentImage}
          alt="comment"
          text="In our store, your opinion matters! We strive to provide you with the best shopping experience, which is why we offer the ability to leave reviews for any product. Whether it's your first time with us or you've been a loyal customer for a long time, we deeply value your feedback. Share your impressions and help us improve our assortment to meet all your needs!"
        />
        <BenefitsItem
          src={fastImage}
          alt="fast"
          text="We understand that your time is valuable! That's why we offer fast delivery right to your doorstep. Order any item from our store, and we'll do everything possible to have it delivered to you as quickly as possible. Now, you don't need to leave the comfort of your chair, as we take care of ensuring a convenient shopping experience for you!"
        />
        <BenefitsItem
          src={cashbackImage}
          alt="cashback"
          text="In our store, we not only help you make purchases but also give you back a portion of your expenses! Thanks to our cashback program, you receive money back from every purchase. This is an additional opportunity to save and get even more satisfaction from your shopping. Shop in our store and enjoy the benefits twofold — through your purchases and cashback!"
        />
      </ul>
    </Container>
  );
};

export { Benefits };
