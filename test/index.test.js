/* eslint-disable no-unused-expressions */
import { html, fixture, expect, defineCE } from '@open-wc/testing';
import { fixtureSync, nextFrame, elementUpdated } from '@open-wc/testing-helpers';
import '../index.js';
import sinon from 'sinon';


describe('my test', () => {
  //  a series of 'it' tests
  let component, pTag, className, spy2
  
  beforeEach(() => {
    component = fixtureSync('<my-app></my-app>');
    // component1 = fixture('<my-app></my-app>');
    pTag = component.shadowRoot.querySelector('p')
    spy2 = sinon.spy(component, 'hello');
   
  });

  it('has a class, and it is mel ', async () => {
    expect(component.label).to.exist;
    expect(component.label).to.equal('vista')
  });

  it('loking for name', async () => {
    expect(pTag.textContent).to.equal("vista")
  })
  
  it('check textContent', async () => {
    component.label = "it's different";
    await elementUpdated(pTag.textContent)
    // expect(component).dom.to.equal(`<p>it's different</p>`)
    expect(pTag.textContent).to.equal("it's different")    
  });

 it("should return new element on button click", async() => {
  
      className = pTag.getAttribute('class')
      console.log('initial class = ', className)
      console.log(pTag.textContent)
      const icon = component.shadowRoot.querySelector('button');
      await icon.click()
      let result = await elementUpdated(pTag.textContent)
      expect(pTag.textContent).to.equal("it's different")
      className = pTag.getAttribute('class')
      expect(className).to.equal('green')
    })

   it('should test the hello function', async() => {
      

        const hello = component.hello
        await hello.bind(component)
        await console.log(component.color)
        await expect(className).to.equal('green')
 
        const result = spy2.bind(component)
        console.log(result)
        const callCount = spy2.callCount;
        console.log(callCount)
        expect(spy2.notCalled).to.equal(true)
        // expect(result).to.equal('hi')
      })

    it('should test setter', async() => {
      component.value ='green';
      expect(component.color).to.equal('green')
      component.color = 'red'
      component.value = 'orange';
      expect(component.color).to.equal('red')
      component.value = 'it\'s different'
      expect(component.label).to.equal('it\'s different')
    })
  })



// A test fixture renders a piece of HTML and injects into the DOM so that you can test the behavior of your component. It returns the first dom element from the template so that you can interact with it if needed. For example you can call functions, look up dom nodes or inspect the rendered HTML.

// Test fixtures are async to ensure rendering is properly completed.

// #Templates
// Test fixtures can be set up by using a string or a lit-html template. You don't need to use lit-html in your project to use the test fixtures, it just renders standard HTML.

// #Test a custom element

 