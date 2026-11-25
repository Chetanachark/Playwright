
import{Page} from '@playwright/test'
class ProductPage
{
    readonly page:Page;
    constructor(page:Page){
        this.page = page;
    }
    async productUrl()
    {
        await this.page.goto('/angularpractice/shop');
    }
     
} export default ProductPage;