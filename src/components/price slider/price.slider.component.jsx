import './price.slider.styles.css';
import { useState } from 'react';


const priceValueDefault = {
    min: 1,
    max: 10200
  }
const PriceSlider = () => {
    const [priceValues, setPriceValues] = useState(priceValueDefault);
  const {min, max} = priceValues;
  const onPriceChange = (event) => {
        const {name,  value} = (event.target);
        console.log(event.target.name);
        if(value > 0 && value <= 10200){
          setPriceValues({...priceValues, [name]: value})
        }else{
          if(name === "min"){
            setPriceValues({...priceValues, min: min})
          }else if(name === "max"){
            setPriceValues({...priceValues, max: max})
          }
        }



  }

  const rangeInput = document.querySelectorAll(".range-input input"),
  priceInput = document.querySelectorAll(".price-input input"),
  range = document.querySelector(".slider .progress");
  let priceGap = 1;
  
  priceInput.forEach(input =>{
      input.addEventListener("input", e =>{
          let minPrice = parseInt(priceInput[0].value),
          maxPrice = parseInt(priceInput[1].value);
          
          if((maxPrice - minPrice >= priceGap) && maxPrice <= rangeInput[1].max){
              if(e.target.className === "input-min"){
                  rangeInput[0].value = minPrice;
                  range.style.left = ((minPrice / rangeInput[0].max) * 100) + "%";
              }else{
                  rangeInput[1].value = maxPrice;
                  range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + "%";
              }
          }
      });
  });
  
  rangeInput.forEach(input =>{
      input.addEventListener("input", e =>{
          let minVal = parseInt(rangeInput[0].value),
          maxVal = parseInt(rangeInput[1].value);
  
          if((maxVal - minVal) < priceGap){
              if(e.target.className === "range-min"){
                  rangeInput[0].value = maxVal - priceGap
              }else{
                  rangeInput[1].value = minVal + priceGap;
              }
          }else{
              priceInput[0].value = minVal;
              priceInput[1].value = maxVal;
              range.style.left = ((minVal / rangeInput[0].max) * 100) + "%";
              range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
          }
      });
  }); 

  return(
    <div class="wrapper">
    <div class="price-input">
      <div class="field">
        <input type="number" class="input-min" name="min" value={min} onChange={onPriceChange}></input>

        </div>
        <div class="separator">-</div>
        <div class="field">
        <input type="number" class="input-max" name="max" value={max} onChange={onPriceChange}></input>
     
      </div>
    </div>
    <div class="slider">
      <div class="progress"></div>
    </div>
    <div class="range-input">
     <input type="range" class="range-min" min="1" max="10200" name='min' value={min} step="1" onChange={onPriceChange} ></input>
      <input type="range" class="range-max" min="1" max="10200" name='max' value={max} step="1" onChange={onPriceChange}></input>
    </div>
  </div>
  )

}


export default PriceSlider;