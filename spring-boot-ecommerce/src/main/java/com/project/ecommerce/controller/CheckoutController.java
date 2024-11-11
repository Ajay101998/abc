package com.project.ecommerce.controller;

import com.project.ecommerce.dto.Purchase;
import com.project.ecommerce.dto.PurchaseResponse;
import com.project.ecommerce.service.CheckoutService;
import org.springframework.web.bind.annotation.*;

//@CrossOrigin
@RestController
@RequestMapping("api/checkout")
public class CheckoutController {

    CheckoutService checkoutService;
    public CheckoutController(CheckoutService checkoutService){
        this.checkoutService = checkoutService;
    }


    @PostMapping("/purchase")
    public PurchaseResponse placeOrder (@RequestBody Purchase purchase)
    {

        return checkoutService.placeOrder(purchase);

    //        PurchaseResponse purchaseResponse = checkoutService.placeOrder(purchase);
    //        return purchaseResponse;


    }
}
