const cookieBtn = document.getElementById("cookieBtn");
const upgradeRollingPinBtn = document.getElementById("upgradeRollingPinBtn");
const upgradeGrandmaBtn = document.getElementById("upgradeGrandmaBtn");
const upgradeMachineBtn = document.getElementById("upgradeMachineBtn");
const upgradeStoreBtn = document.getElementById("upgradeStoreBtn");
const upgradeFactoryBtn = document.getElementById("upgradeFactoryBtn");
const cookiesSpan = document.getElementById("cookiesSpan");
const cpsSpan = document.getElementById("cpsSpan");
const rollingPinOwed = document.getElementById("rollingPinOwed");
const grandmaOwed = document.getElementById("grandmaOwed");
const machineOwed = document.getElementById("machineOwed");
const storeOwed = document.getElementById("storeOwed");
const factoryOwed = document.getElementById("factoryOwed");

//This did not work as expected
// const spanOwned = document.getElementById("Owed");
// spanOwned.innerHTML= `Grandma Owed: ${grandmaOwed}<br>
//                       Machine Owed: ${machineOwed}<br>
//                       Store Owed: ${storeOwed}<br>
//                       Factory Owed: ${factoryOwed}`;

const stats = {
  cookieCount: 0,
  cps: 0, 
};

// updates local storage
const storageStats = JSON.parse(localStorage.getItem("stats"));

if (storageStats !== null) {
    stats.cookieCount = storageStats.cookieCount;
    stats.cps = storageStats.cps;
    updatePage();
  }

function buyCookie() {
    stats.cookieCount++;
    updatePage();
    updateStorage();
}
function buyUpgradeRollingPin() {
    stats.cps ++; 
    stats.cookieCount -= 10;
    updatePage();
    updateStorage();
  }
  function buyUpgradeGrandma() {
    stats.cps += 5; 
    stats.cookieCount -= 20;
    updatePage();
    updateStorage();
  }

  function buyUpgradeMachine() {
    stats.cps+= 30; 
    stats.cookieCount -= 50; 
    updatePage();
      updateStorage();
      
  } function buyUpgradeStore() {
    stats.cps+= 40; 
    stats.cookieCount -= 70; 
    updatePage();
    updateStorage();
  }

  function buyUpgradeFactory() {
    stats.cps+= 50; 
    stats.cookieCount -= 100;
    updatePage();
    updateStorage();
  }
  
  function reset() {
    stats.fps = 0;
    stats.frogCount = 0;
  }
  // Define  the showError function
function showError(message) {
    const errorMessageElement = document.getElementById("errorMessage");
    errorMessageElement.textContent = message;
    setTimeout(() => {
        errorMessageElement.style.display = "none";
    }, 5000);
}

// Rolling-pin upgrade
if (stats.cookieCount < 1) {
    upgradeRollingPinBtn.setAttribute("disabled", "");
    showError("Not enough cookies for Rolling Pin upgrade (requires at least 1 cookie required)");
} else {
    // Enable the button if the condition is not met
    upgradeRollingPinBtn.removeAttribute("disabled", "");
}

// Grandma upgrade
if (stats.cookieCount < 5) {
    upgradeGrandmaBtn.setAttribute("disabled", "");
    showError("Not enough cookies for Grandma upgrade (requires at least 5 cookie required)");
} else {
    upgradeGrandmaBtn.removeAttribute("disabled", "");
}

// Machine upgrade
if (stats.cookieCount < 30) {
    upgradeMachineBtn.setAttribute("disabled", "");
    showError("Not enough cookies for Machine upgrade (requires at least 30 cookies required)");
} else {
    upgradeMachineBtn.removeAttribute("disabled", "");
}

// Store upgrade
if (stats.cookieCount < 40) {
    upgradeStoreBtn.setAttribute("disabled", "");
    showError("Not enough cookies for store upgrade (requires at least 40 cookie required)");
} else {
    upgradeStoreBtn.removeAttribute("disabled", "");
}

// Factory upgrade
if (stats.cookieCount < 100) {
    upgradeFactoryBtn.setAttribute("disabled", "");
    showError("Not enough cookies for a factory upgrade (requires at least 100 cookie required)");
} else {
    upgradeFactoryBtn.removeAttribute("disabled", "");
}

function updatePage() {
    cookiesSpan.textContent = stats.cookieCount;
    cpsSpan.textContent = stats.cps;
}


//Save current progress to localStorage
function saveProgress() {
    localStorage.setItem("cookies", cookies);
    localStorage.setItem("upgrades", JSON.stringify(upgrades))
}
function updateStorage() {
  localStorage.setItem("stats", JSON.stringify(stats));
}

function reset() {
    stats.cps = 0;
    stats.cookieCount = 0;
  }

cookieBtn.addEventListener("click", buyCookie);
upgradeRollingPinBtn.addEventListener("click", buyUpgradeRollingPin);
upgradeGrandmaBtn.addEventListener("click", buyUpgradeGrandma);
upgradeMachineBtn.addEventListener("click", buyUpgradeMachine);
upgradeStoreBtn.addEventListener("click", buyUpgradeStore);
upgradeFactoryBtn.addEventListener("click", buyUpgradeFactory);

resetButton.addEventListener("click", reset);

setInterval(function () {
  stats.cookieCount += stats.cps;
  updatePage();
  updateStorage();
}, 1000);


console.log(updateStorage);


const cookieBounce = document.getElementById('cookieBounce');

cookieBounce.addEventListener('click', () => {
  cookieBounce.classList.add('bounce'); // Add 'bounce' class to trigger animation

  // Remove 'bounce' class after animation ends
  setTimeout(() => {
    cookieBounce.classList.remove('bounce');
  }, 500);
});
const counterP = document.getElementById("counter");
const btn = document.getElementById("cookieBtn");
let count = 0;

function increaseCount() {
    // increase count by 1
    count++;

    // update the counterP will count
    counterP.textContent = count;

    // put the count value into localStorage
    localStorage.setItem("count", count);

    function load() {

        if (localStorage.getItem("count") != null) {

            count = localStorage.getItem("count");

            counterP.textContent = localStorage.getItem("count");
        }
    }

    function increaseCookiesPerSecond() {
        let cps = 1; // cookies per second
        for (let item of purchasedItems) {
            cps += item.increase;
        }
        return cps;
    }

}