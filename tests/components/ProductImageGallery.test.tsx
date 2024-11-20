import { render, screen } from '@testing-library/react'
import ProductImageGallery from '../../src/components/ProductImageGallery';

/* Test Case 01 */
/* Expected result is it should render nothing if returned with empty array */
describe ('ProductImageGallery', () => {
    it('should render nothing if returned with empty array', () => {
        const{container} = render(<ProductImageGallery  imageUrls={[]}/>);
        expect(container).toBeEmptyDOMElement();
        console.log('PASSED as expected.');
    })

    /* Test Case 02 */
/* Expected result is it should render a list of images */
    it('should render a list of images', () => {
        // two array objects...
        const imageUrls = ['url1','url2'];
        // render code...
        render(<ProductImageGallery imageUrls={imageUrls}/>);
        // assertion code...
        const images = screen.getAllByRole('img');
        expect(images).toHaveLength(2);
        imageUrls.forEach((url, index) => {
            expect (images[index]).toHaveAttribute('src', url);    
        });
        console.log('PASSED as expected.');
    })
})