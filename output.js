//Fri Aug 08 2025 04:36:37 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
var ta = new TurboActivate("arpdrd4plhut36mtnq4rolpmxzoivdq");
var csInterface = new CSInterface();
var testProductKey = false;
var testProductKeyTime = false;
var testtrial = false;
var testtrialTime = false;
const fs = require("fs");
const crypto = require("crypto");
const path = require("path");
const os = require("os");
const {
  execSync
} = require("child_process");
function setExecutablePermissionMac(_0x17166) {
  try {
    if (!fs.existsSync(_0x17166)) {
      return;
    }
    const _0x2def45 = fs.statSync(_0x17166);
    const _0x29a62d = (_0x2def45.mode & 64) !== 0;
    if (!_0x29a62d) {
      execSync("chmod u+x \"" + _0x17166 + "\"");
      alert("Please restart Illustrator.");
    } else {}
  } catch (_0x25e741) {}
}
if (process.platform === "darwin") {
  var homeFolderExtension = csInterface.getSystemPath(SystemPath.EXTENSION);
  var filePath = path.join(homeFolderExtension, "client", "native", "Mac", "libTurboActivate.dylib");
  setExecutablePermissionMac(filePath);
  var filePath = path.join(homeFolderExtension, "client", "native", "Mac", "systa");
  setExecutablePermissionMac(filePath);
}
function HardFailure(_0x39f504, _0x74268c) {
  alert(_0x39f504 + ": " + _0x74268c);
  process.exit(1);
}
function PromptUserToReverify() {
  var _0xcc877b = confirm("Please make sure you have internet connection, extension needs to verify your product key. Press OK if you have internet conection or Cancel if you want to quit.");
  var _0x519cc7;
  if (_0xcc877b) {
    _0x519cc7 = "y";
    ;
  } else {
    _0x519cc7 = "n";
    ;
  }
  testProductKey = false;
  testProductKeyTime = false;
  if (_0x519cc7 === "n") {} else {
    ta.IsGenuine().then(_0x21f27d => {
      if (_0x21f27d === TA_E_INET) {
        PromptUserToReverify();
        return null;
      } else if (_0x21f27d === TA_OK || _0x21f27d === TA_E_FEATURES_CHANGED) {
        testProductKey = true;
        return null;
      } else {
        HardFailure("Not activated.", _0x21f27d);
      }
    }).catch(_0x55a69a => {
      HardFailure("Something failed! " + _0x55a69a, 1);
    }).then(() => {
      return checkTimeRestriction();
    }).then(_0x117014 => {
      testProductKeyTime = _0x117014;
      if (testProductKey && testProductKeyTime) {
        BeginAppLGG();
      } else if (!testtrial) {
        PKeyExpiredView();
      }
    });
  }
}
function TATrialChange(_0x2e99a3) {
  switch (_0x2e99a3) {
    case TA_CB_EXPIRED:
    case TA_CB_EXPIRED_FRAUD:
    default:
      TrialExpired();
      break;
  }
}
function TrialExpired() {
  activationTrialView();
}
function PromptForProductKey(_0x1e649d) {
  var _0x5930f2 = _0x1e649d;
  testProductKey = false;
  testProductKeyTime = false;
  ta.CheckAndSavePKey(_0x5930f2, TA_USER).then(_0x5ddad3 => {
    if (_0x5ddad3 === TA_OK) {
      return ta.Activate();
    } else {
      HardFailure("Something failed! " + _0x5ddad3, 1);
      return null;
    }
  }).then(_0x135f58 => {
    if (_0x135f58 === null) {
      return null;
    }
    if (_0x135f58 === TA_OK) {
      testProductKey = true;
    } else {
      HardFailure("Activation failed.", _0x135f58);
    }
  }).catch(_0x2ef656 => {
    HardFailure("Something failed! " + _0x2ef656, 1);
  }).then(() => {
    return checkTimeRestriction();
  }).then(_0x7c16e0 => {
    testProductKeyTime = _0x7c16e0;
    if (testProductKey && testProductKeyTime) {
      BeginAppLGG();
    } else if (!testProductKeyTime) {
      ta.Deactivate(true);
      alert("This product key expired.");
      DialogTrialActivation();
    } else if (!testtrial) {
      PKeyExpiredView();
    }
  });
}
function DialogTrialActivation() {
  activationView();
  updateTrialDays(testtrialTime);
}
function activationView() {
  resizePanelWindow(startWidth, 330);
  var _0x13f41a = document.getElementById("startplugin");
  var _0x4b0f8a = document.getElementById("activation");
  _0x13f41a.style.display = "none";
  _0x4b0f8a.style.display = "block";
}
function activationTrialView() {
  resizePanelWindow(startWidth, startHeight);
  var _0xf6b5af = document.getElementById("startplugin");
  var _0x16632c = document.getElementById("activation");
  var _0x218d36 = document.getElementById("PKeyExpired");
  var _0x285c53 = document.getElementById("activationTrial");
  _0xf6b5af.style.display = "none";
  _0x16632c.style.display = "none";
  _0x218d36.style.display = "none";
  _0x285c53.style.display = "block";
}
function PKeyExpiredView() {
  resizePanelWindow(startWidth, startHeight);
  var _0x180ef9 = document.getElementById("startplugin");
  var _0x193bb3 = document.getElementById("activation");
  var _0x1c4ea5 = document.getElementById("PKeyExpired");
  var _0x5e0736 = document.getElementById("activationTrial");
  _0x180ef9.style.display = "none";
  _0x193bb3.style.display = "none";
  _0x1c4ea5.style.display = "block";
  _0x5e0736.style.display = "none";
}
function startpluginView() {
  resizePanelWindow(startWidth, startHeight);
  var _0xd8dbca = document.getElementById("startplugin");
  var _0x118edf = document.getElementById("activation");
  var _0x1069f2 = document.getElementById("PKeyExpired");
  var _0x18c4f4 = document.getElementById("activationTrial");
  _0xd8dbca.style.display = "block";
  _0x118edf.style.display = "none";
  _0x1069f2.style.display = "none";
  _0x18c4f4.style.display = "none";
}
function activation2View() {
  var _0xb5eaf1 = document.getElementById("activation");
  var _0x5a4716 = document.getElementById("activation2");
  _0xb5eaf1.style.display = "none";
  _0x5a4716.style.display = "block";
}
function updateTrialDays(_0x30c49d) {
  var _0xb02915 = document.getElementById("trialText");
  if (_0xb02915) {
    _0xb02915.textContent = _0x30c49d + " days left in trial. Click on start trial to continue with the trial version.";
  }
}
function submitProductKey() {
  var _0x96367a = document.getElementById("productKey").value;
  PromptForProductKey(_0x96367a);
}
function submitProductKeyTrial() {
  var _0x5382bf = document.getElementById("productKey2").value;
  PromptForProductKey(_0x5382bf);
}
function openSupportPage() {
  csInterface.evalScript("openSupportPage()");
}
function openUpdatePage() {
  csInterface.evalScript("openUpdatePage()");
}
function openBuyPage() {
  csInterface.evalScript("openBuyPage()");
}
function openSignPage() {
  csInterface.evalScript("openSignPage()");
}
function continueTrial() {
  startpluginView();
  return;
}
function addProductKey() {
  ta.IsActivated().then(_0x1fbd14 => {
    alert("After acivate " + _0x1fbd14);
    if (_0x1fbd14 === 1) {
      alert("inside cond");
      window.location.href = "verification.html";
    } else {
      verificationProc();
    }
  }).catch(_0xb09110 => {
    alert(_0xb09110);
  });
}
const trialFlags = TA_USER | TA_VERIFIED_TRIAL;
const DaysBetweenChecks = 3;
const GracePeriodLength = 3;
function checkTimeRestriction() {
  var _0x91faa9 = null;
  var _0xd2b615;
  return ta.GetFeatureValue("how long").then(_0x58baf0 => {
    _0x91faa9 = _0x58baf0[1];
    if (_0x58baf0[0] === TA_OK) {
      return ta.IsDateValid(_0x58baf0[1]);
    } else {
      return TA_FAIL;
    }
  }).then(_0x52c96c => {
    if (_0x52c96c === null) {
      return null;
    }
    if (_0x52c96c === TA_OK) {
      _0xd2b615 = true;
      return true;
    } else {
      _0xd2b615 = false;
      return false;
    }
  });
}
function verificationProc() {
  testtrial = false;
  testProductKey = false;
  testProductKeyTime = false;
  ta.IsGenuineEx(DaysBetweenChecks, GracePeriodLength, true).then(_0x598f43 => {
    if (_0x598f43 === TA_OK || _0x598f43 === TA_E_FEATURES_CHANGED || _0x598f43 === TA_E_INET || _0x598f43 === TA_E_INET_DELAYED) {
      testProductKey = true;
      return null;
    } else {
      return ta.IsActivated();
    }
  }).then(_0x250db6 => {
    if (_0x250db6 === null) {
      return null;
    }
    if (_0x250db6 === TA_OK) {
      PromptUserToReverify();
      return null;
    } else {
      return ta.UseTrial(TATrialChange, trialFlags);
    }
  }).then(_0x3fe269 => {
    if (_0x3fe269 === null) {
      return null;
    }
    if (_0x3fe269 === TA_OK) {
      return ta.TrialDaysRemaining(trialFlags);
    } else if (_0x3fe269 === TA_E_TRIAL_EXPIRED) {
      TrialExpired();
      return null;
    } else if (_0x3fe269 === TA_E_NO_MORE_TRIALS_ALLOWED) {
      activationTrialView();
      return null;
    } else {
      HardFailure("Failed to start the trial", _0x3fe269);
    }
  }).then(_0x18fb56 => {
    if (_0x18fb56 === null) {
      return null;
    }
    if (_0x18fb56[0] === TA_OK) {
      if (_0x18fb56[1] > 0) {
        testtrial = true;
        testtrialTime = _0x18fb56[1];
        BeginAppLGG(true, _0x18fb56[1]);
        DialogTrialActivation();
      } else {
        TrialExpired();
        return null;
      }
    } else {
      HardFailure("Failed to get the trial days remaining", _0x18fb56[0]);
    }
  }).catch(_0x5f4ad6 => {
    HardFailure("Something failed! " + _0x5f4ad6, 1);
  }).then(() => {
    return checkTimeRestriction();
  }).then(_0x3b681f => {
    testProductKeyTime = _0x3b681f;
    if (testProductKey && testProductKeyTime) {
      BeginAppLGG();
    }
    if (testProductKey && !testProductKeyTime) {
      PKeyExpiredView();
    } else if (!testtrial & !testProductKey && !testProductKeyTime) {
      activationTrialView();
    }
  });
}
function countCharactersInFile(_0x5099f7) {
  try {
    const _0x334902 = fs.readFileSync(_0x5099f7, "utf-8");
    const _0x4fa2f8 = _0x334902.length;
    return _0x4fa2f8;
  } catch (_0x38de17) {}
}
function findWordInFile(_0x150d97, _0x238b45) {
  try {
    const _0x2f197d = fs.readFileSync(_0x150d97, "utf-8");
    const _0x3dbe02 = new RegExp("\\b" + _0x238b45 + "\\b", "gi");
    const _0x5c4af5 = _0x2f197d.match(_0x3dbe02);
    if (_0x5c4af5) {
      return _0x5c4af5.length;
    } else {
      return 0;
    }
  } catch (_0x7dcd20) {}
}
function generateHash(_0x572c3e) {
  const _0x1fe98d = fs.readFileSync(_0x572c3e);
  return crypto.createHash("sha256").update(_0x1fe98d).digest("hex");
}
function BeginAppLGG(_0xfdcab8 = false, _0x44af95 = 0) {
  const _0x8205ca = "78765490ee7fb36268fe4f79afea4baa1709a79c6c8707114ffc79e9fe9a64af";
  const _0x23ca33 = generateHash(String(__dirname + "/client/native/Windows/systa.exe"));
  if (_0x8205ca !== _0x23ca33) {
    return;
  }
  const _0x506bda = "f53487d184b268f5ddcecff98c2f62e5141ec0030b54a65f02cc4e7057d5c7ad";
  const _0x314c7b = generateHash(String(__dirname + "/client/native/Windows/TurboActivate.dll"));
  if (_0x506bda !== _0x314c7b) {
    return;
  }
  const _0x3b4d7e = "8e5e405f33e3354f93f1cbf6589173bd187aa9cfdc8b69275bf5bae6301d82e0";
  const _0x24b140 = generateHash(String(__dirname + "/client/native/Windows/TurboActivate.dat"));
  if (_0x3b4d7e !== _0x24b140) {
    return;
  }
  const _0x5f39a2 = "af9b8c8bcc4f070ca49d7404c9990130c4529422ecc6b700ba02bb96d2350047";
  const _0x3d9e54 = generateHash(String(__dirname + "/client/native/Mac/systa"));
  if (_0x5f39a2 !== _0x3d9e54) {
    return;
  }
  const _0xf22c44 = "8c137d997afc2a50114829d7d3c53174fe81a83f1771a176182cded0c3ed160b";
  const _0x5db6c9 = generateHash(String(__dirname + "/client/native/Mac/libTurboActivate.dylib"));
  if (_0xf22c44 !== _0x5db6c9) {
    return;
  }
  const _0xb0f1cf = "8e5e405f33e3354f93f1cbf6589173bd187aa9cfdc8b69275bf5bae6301d82e0";
  const _0xd0ea63 = generateHash(String(__dirname + "/client/native/Mac/TurboActivate.dat"));
  if (_0xb0f1cf !== _0xd0ea63) {
    return;
  }
  const _0x4a1646 = String(__dirname + "/client/turboactivate.js");
  const _0x5dbcf6 = "61049bf7c49f356681cfcce7ce08cd3cfc20ef9d3a48b937ca6b3d2d0245144a";
  const _0x304a15 = generateHash(_0x4a1646);
  if (_0x5dbcf6 !== _0x304a15) {
    return;
  }
  const _0x108b05 = String(__dirname + "/client/bezier.js");
  const _0x3f8d2c = "4df9d4820c2daf948e2a0cef3c2db24f9ebcd2b768239ff060874231a6fd3b28";
  const _0x4cfab8 = generateHash(_0x108b05);
  if (_0x3f8d2c !== _0x4cfab8) {
    return;
  }
  if (countCharactersInFile(_0x4a1646) != 72645) {
    return;
  }
  if (findWordInFile(_0x4a1646, "12091008UGPfgJ") == 0) {
    return;
  }
  if (findWordInFile(_0x4a1646, "82240okjttB") == 0) {
    return;
  }
  var _0x594113;
  try {
    _0x594113 = validationChange();
  } catch (_0x29cbd4) {}
  try {
    if (_0x594113 != "tes12dwejgl45ihll3gldnRRrjshhR453") {
      return;
    }
  } catch (_0x3d315d) {}
  startpluginView();
  customize();
  preferences();
  var _0x3804ac = document.getElementById("presets-button");
  var _0x5513a6 = document.getElementById("uncheckSelected");
  var _0x4e04c5 = document.getElementById("run-button");
  var _0x294b18 = document.getElementById("runAll-button");
  _0x4e04c5.addEventListener("click", function () {
    var _0x2df8bd = document.querySelectorAll(".cat input[type='checkbox']");
    var _0x1e0d5c = [];
    var _0x5a3c19 = false;
    var _0x5ba88 = false;
    var _0x4e76e8 = false;
    var _0x2a8d7f = false;
    _0x2df8bd.forEach(function (_0x148f35) {
      if (_0x148f35.checked) {
        _0x1e0d5c.push(_0x148f35.value);
        if (_0x148f35.value == "Anchors") {
          _0x5a3c19 = true;
        }
        if (_0x148f35.value == "Handles") {
          _0x5ba88 = true;
        }
        if (_0x148f35.value == "OutLines") {
          _0x4e76e8 = true;
        }
        if (_0x148f35.value == "GridLines") {
          _0x2a8d7f = true;
        }
      }
    });
    var _0x5c0a50 = document.querySelectorAll("#PreferencesMenu input[type=\"checkbox\"]");
    var _0x491ac0 = [];
    _0x5c0a50.forEach(function (_0x58c854) {
      if (_0x58c854.checked) {
        _0x491ac0.push(_0x58c854.value);
      }
    });
    var _0x35d377 = "addDataTodataUI(" + JSON.stringify(dataUI) + ")";
    csInterface.evalScript(_0x35d377);
    var _0x35d377 = "gridIt( \"" + _0x5a3c19 + "\",\"" + _0x5ba88 + "\",\"" + _0x4e76e8 + "\",\"" + _0x2a8d7f + "\")";
    csInterface.evalScript(_0x35d377);
    if (dataUI.circular_trajectories.thresholdError > 0) {
      var _0x35d377 = "convertCircularTrajectories( \"\")\")";
      csInterface.evalScript(_0x35d377);
    }
  });
  _0x294b18.addEventListener("click", function () {
    var _0x552207 = document.querySelectorAll(".cat input[type='checkbox']");
    var _0x10d124 = [];
    var _0x1af267 = true;
    var _0x4cd1f6 = true;
    var _0x586bda = true;
    var _0x788b1b = true;
    var _0x246bc7 = document.querySelectorAll("#PreferencesMenu input[type=\"checkbox\"]");
    var _0x45b317 = [];
    _0x246bc7.forEach(function (_0x462add) {
      if (_0x462add.checked) {
        _0x45b317.push(_0x462add.value);
      }
    });
    var _0x46f2f1 = "addDataTodataUI(" + JSON.stringify(dataUI) + ")";
    csInterface.evalScript(_0x46f2f1);
    var _0x46f2f1 = "gridIt( \"" + _0x1af267 + "\",\"" + _0x4cd1f6 + "\",\"" + _0x586bda + "\",\"" + _0x788b1b + "\")";
    csInterface.evalScript(_0x46f2f1);
    if (dataUI.circular_trajectories.thresholdError > 0) {
      var _0x46f2f1 = "convertCircularTrajectories( \"\")\")";
      csInterface.evalScript(_0x46f2f1);
    }
  });
  _0x5513a6.addEventListener("click", function () {
    var _0x289aa8 = document.querySelectorAll(".cat input[type='checkbox']");
    _0x289aa8.forEach(function (_0x3086c6) {
      _0x3086c6.checked &&= false;
    });
    dataUI = {
      anchors: {
        size: 10,
        fill: [52, 41, 41, 24],
        stroke: {
          width: 1,
          color: [52, 41, 41, 24]
        }
      },
      handles: {
        size: 10,
        fill: [0, 0, 0, 0],
        stroke: {
          width: 1,
          color: [52, 41, 41, 24]
        }
      },
      outlines: {
        fill: [3, 2, 2, 0],
        stroke: {
          width: 0.5,
          color: [0, 0, 0, 100]
        }
      },
      gridlines: {
        stroke: {
          width: 0.5,
          color: [39, 30, 31, 9]
        }
      },
      gridlines_level: 1,
      circular_trajectories: {
        thresholdError: 0,
        NumberCirTraj: {
          option: "All",
          number: 1
        }
      }
    };
    document.getElementById("anchorsSizeID").value = "10";
    var _0x512d1e = document.getElementById("fillAnchors");
    _0x512d1e.style.background = "none";
    _0x512d1e.style.backgroundColor = "#6d7172";
    var _0x512d1e = document.getElementById("strokeAnchors");
    _0x512d1e.style.background = "url('No red transparent.png') no-repeat center center";
    _0x512d1e.style.backgroundColor = "#6d7172";
    document.getElementById("input-fieldAnchors").value = "1";
    document.getElementById("handlesSizeID").value = "10";
    var _0x512d1e = document.getElementById("fillHandles");
    _0x512d1e.style.background = "none";
    _0x512d1e.style.backgroundColor = "#ffffff";
    var _0x512d1e = document.getElementById("strokeHandles");
    _0x512d1e.style.background = "url('No red transparent.png') no-repeat center center";
    _0x512d1e.style.backgroundColor = "#6d7172";
    document.getElementById("input-fieldHandles").value = "1";
    var _0x512d1e = document.getElementById("fillOutlines");
    _0x512d1e.style.background = "none";
    _0x512d1e.style.backgroundColor = "#f4f4f4";
    var _0x512d1e = document.getElementById("strokeOutlines");
    _0x512d1e.style.background = "url('No red transparent.png') no-repeat center center";
    _0x512d1e.style.backgroundColor = "#231f20";
    document.getElementById("input-fieldOutlines").value = "0.5";
    var _0x512d1e = document.getElementById("strokeGridlines");
    _0x512d1e.style.background = "url('No red transparent.png') no-repeat center center";
    _0x512d1e.style.backgroundColor = "#959898";
    document.getElementById("input-fieldGridlines").value = "0.5";
    var _0x48a536 = document.getElementById("CircTrajSlider");
    var _0x30f0dd = document.getElementById("CircTrajSliderText");
    var _0x50c4ce = document.getElementById("slider-containerID");
    var _0x26b7c5 = document.getElementById("numberCircTrajText");
    var _0x514ce9 = document.getElementById("numberCircTraj");
    var _0x285072 = document.getElementById("numCir");
    _0x48a536.value = 2;
    toggleButton.style.backgroundImage = "url('Switch Off.png')";
    dataUI.circular_trajectories.thresholdError = 0;
    _0x48a536.value = 2;
    _0x48a536.disabled = true;
    _0x50c4ce.style.opacity = "0.2";
    _0x30f0dd.style.opacity = "0.2";
    _0x26b7c5.style.opacity = "0.2";
    _0x514ce9.style.opacity = "0.2";
    _0x514ce9.value = "All";
    _0x514ce9.disabled = true;
    _0x285072.style.opacity = "0.2";
    _0x285072.value = "1";
    _0x285072.disabled = true;
    var _0x3cd00e = document.getElementById("GridlineSenzitivity");
    _0x3cd00e.value = 1;
  });
}
function deleteFile(_0x2f165f) {
  try {
    if (fs.existsSync(_0x2f165f)) {
      fs.unlinkSync(_0x2f165f);
    } else {}
  } catch (_0x575254) {
    alert("Delete File Error:", _0x575254);
  }
}
function mkdirRecursive(_0x253875) {
  if (fs.existsSync(_0x253875)) {
    return;
  }
  mkdirRecursive(path.dirname(_0x253875));
  fs.mkdirSync(_0x253875);
}
document.addEventListener("DOMContentLoaded", onAppLoaded);
function onAppLoaded() {
  var _0xcb7ab1 = new CSInterface();
  _0xcb7ab1.addEventListener("com.adobe.csxs.events.flyoutMenuClicked", function (_0x2624e6) {
    switch (_0x2624e6.data.menuId) {
      case "com.logoGridGenerator2.2.option1":
        if (testProductKey && testProductKeyTime) {
          var _0x3a488c = document.getElementById("messageDeactivate");
          _0x3a488c.style.display = "block";
        }
        break;
      case "com.logoGridGenerator2.2.option2":
        var _0x3a488c = document.getElementById("messageUninstall");
        _0x3a488c.style.display = "block";
        break;
      case "com.logoGridGenerator2.2.option3":
        break;
    }
  });
  var _0x45936d = "<Menu><MenuItem Label=\"Deactivate License\" Id=\"com.logoGridGenerator2.2.option1\" Enabled=\"true\" Checked=\"false\"/><MenuItem Label=\"Uninstall extension\" Id=\"com.logoGridGenerator2.2.option2\" Enabled=\"true\" Checked=\"false\"/><MenuItem Label=\"Logo Grid Generator V2.2\" Id=\"com.logoGridGenerator2.2.option3\" Enabled=\"true\" Checked=\"false\"/></Menu>";
  _0xcb7ab1.setPanelFlyoutMenu(_0x45936d);
}
document.getElementById("okButton").addEventListener("click", function () {
  ta.Deactivate(true);
  testProductKey = false;
  testProductKeyTime = false;
  document.getElementById("messageDeactivate").style.display = "none";
  DialogTrialActivation();
});
document.getElementById("cancelButton").addEventListener("click", function () {
  document.getElementById("messageDeactivate").style.display = "none";
});
document.getElementById("okButtonUninstall").addEventListener("click", function () {
  ta.Deactivate(true);
  testProductKey = false;
  testProductKeyTime = false;
  document.getElementById("messageUninstall").style.display = "none";
  document.body.innerHTML = "";
  const _0x4d2de9 = os.homedir();
  if (os.platform() === "win32") {
    try {
      var _0x2a0a82 = csInterface.getSystemPath(SystemPath.EXTENSION).replace(/\\/g, "\\\\");
      const _0x2c81f6 = "\n            @echo off\n            :CheckPrivileges\n            net session >nul 2>&1\n            if %errorLevel% == 0 ( goto Continue ) else ( goto GetPrivileges )\n\n            :GetPrivileges\n            echo Requesting administrative privileges...\n            PowerShell -Command \"Start-Process '%~0' -Verb RunAs\"\n            exit\n\n            :Continue\n            REM Define the path to the extension folder\n            SET extensionFolder=" + _0x2a0a82 + "\n\n            REM Remove the extension folder with administrative privileges\n            if exist \"%extensionFolder%\" (\n                rmdir /S /Q \"%extensionFolder%\"\n                if exist \"%extensionFolder%\" (\n                    echo Folder deletion failed.\n                ) else (\n                    echo Extension removed successfully.\n                )\n            ) else (\n                echo Extension folder not found.\n            )";
      var _0x24787a = path.join(_0x4d2de9, "AppData", "Roaming", "GridIt", "LGG", "uninstaller2.bat");
      var _0x1e7d04 = path.dirname(_0x24787a);
      mkdirRecursive(_0x1e7d04);
      fs.writeFileSync(_0x24787a, _0x2c81f6, "utf8");
      var _0x405845 = execSync(_0x24787a, {
        encoding: "utf-8"
      });
    } catch (_0x5dfbd2) {
      alert("Error: " + _0x5dfbd2.message);
    }
  } else {
    try {
      var _0x2a0a82 = csInterface.getSystemPath(SystemPath.EXTENSION);
      const _0x144938 = "\n            display dialog \"Uninstall this?\" buttons {\"Uninstall\", \"Cancel\"} default button 1\n            if the button returned of the result is \"Uninstall\" then\n                set extensionFolder to \"" + _0x2a0a82 + "\"\n                do shell script \"rm -rf \" & quoted form of extensionFolder with administrator privileges\n                if (do shell script \"test -d \" & quoted form of extensionFolder & \" && echo exists || echo not_exists\") = \"not_exists\" then\n                    display dialog \"Extension removed successfully!\" buttons {\"OK\"} default button 1\n                else\n                    display dialog \"Folder deletion failed.\" buttons {\"OK\"} default button 1\n                end if\n            end if";
      var _0x24787a = path.join(_0x4d2de9, "Library", "Application Support", "GridIt", "LGG", "uninstaller2.applescript");
      var _0x1e7d04 = path.dirname(_0x24787a);
      mkdirRecursive(_0x1e7d04);
      fs.writeFileSync(_0x24787a, _0x144938, "utf8");
      const _0x330fed = "\"" + _0x24787a + "\"";
      if (fs.existsSync(_0x24787a)) {
        var _0x405845 = execSync("osascript " + _0x330fed, {
          encoding: "utf-8"
        });
      } else {
        alert("Error: Uninstaller file not found.");
      }
    } catch (_0x22d72c) {
      alert("Error: " + _0x22d72c.message);
    }
  }
});
document.getElementById("cancelButtonUninstall").addEventListener("click", function () {
  document.getElementById("messageUninstall").style.display = "none";
});
function resizePanelWindow(_0x4a1a81, _0x1c282a) {
  csInterface.resizeContent(_0x4a1a81, _0x1c282a);
}
function customize_Off() {
  resizePanelWindow(startWidth, startHeight);
  var _0x45375a = document.getElementById("CustomizeMenu");
  _0x45375a.style.display = "none";
  var _0x4288d3 = document.getElementById("arrowIcon");
  _0x4288d3.classList.remove("down");
  _0x4288d3.classList.add("right");
  customizeIndex = 0;
}
function customize_On() {
  preferences_Off();
  resizePanelWindow(startWidth, 600);
  var _0x287544 = document.getElementById("CustomizeMenu");
  _0x287544.style.display = "block";
  var _0x48c3c6 = document.getElementById("arrowIcon");
  _0x48c3c6.classList.remove("right");
  _0x48c3c6.classList.add("down");
  preferencesIndex = 0;
  customizeIndex = 1;
}
function preferences_Off() {
  resizePanelWindow(startWidth, startHeight);
  var _0x103e75 = document.getElementById("PreferencesMenu");
  _0x103e75.style.display = "none";
  var _0x24d7b8 = document.getElementById("arrowIconP");
  _0x24d7b8.classList.remove("down");
  _0x24d7b8.classList.add("right");
  preferencesIndex = 0;
}
function preferences_On() {
  customize_Off();
  resizePanelWindow(startWidth, 505);
  var _0x55a392 = document.getElementById("PreferencesMenu");
  _0x55a392.style.display = "block";
  var _0x47522e = document.getElementById("arrowIconP");
  _0x47522e.classList.remove("right");
  _0x47522e.classList.add("down");
  preferencesIndex = 1;
  customizeIndex = 0;
}
function customizeClick() {
  customize_functions[customizeIndex]();
}
function preferencesClick() {
  preferences_functions[preferencesIndex]();
}
var customize_functions = [customize_On, customize_Off];
var preferences_functions = [preferences_On, preferences_Off];
var customizeIndex = 0;
var preferencesIndex = 0;
var colorValue;
var currentClass;
var currentId;
var buttonID;
var pickColorType;
var rgbValue;
var buttonColorChange;
var buttonSwitch1;
var buttonSwitch2;
var startWidth = 260;
var startHeight = 390;
var arcs;
var arcs;
var circularTrajectories;
var dataUI = {
  anchors: {
    size: 10,
    fill: [52, 41, 41, 24],
    stroke: {
      width: 1,
      color: [52, 41, 41, 24]
    }
  },
  handles: {
    size: 10,
    fill: [0, 0, 0, 0],
    stroke: {
      width: 1,
      color: [52, 41, 41, 24]
    }
  },
  outlines: {
    fill: [3, 2, 2, 0],
    stroke: {
      width: 0.5,
      color: [0, 0, 0, 100]
    }
  },
  gridlines: {
    stroke: {
      width: 0.5,
      color: [39, 30, 31, 9]
    }
  },
  gridlines_level: 1,
  circular_trajectories: {
    thresholdError: 0,
    NumberCirTraj: {
      option: "All",
      number: 1
    }
  }
};
function customize() {
  document.getElementById("Customize").addEventListener("click", customizeClick);
  csInterface.addEventListener("colorSending", function (_0x4c8d3f) {
    colorValue = _0x4c8d3f.data;
    changeColor(buttonID);
  });
  csInterface.addEventListener("countFiles", function (_0x1df5f5) {
    if (_0x1df5f5.data == 0) {
      alert("Please open Illustrator file before you set up color.");
    } else {
      var _0x28df14;
      if (pickColorType == "anchorsFill") {
        _0x28df14 = dataUI.anchors.fill;
      } else if (pickColorType == "anchorsStroke") {
        _0x28df14 = dataUI.anchors.stroke.color;
      } else if (pickColorType == "handlesFill") {
        _0x28df14 = dataUI.handles.fill;
      } else if (pickColorType == "handlesStroke") {
        _0x28df14 = dataUI.handles.stroke.color;
      } else if (pickColorType == "outlinesFill") {
        _0x28df14 = dataUI.outlines.fill;
      } else if (pickColorType == "outlinesStroke") {
        _0x28df14 = dataUI.outlines.stroke.color;
      } else if (pickColorType == "gridlinesStroke") {
        _0x28df14 = dataUI.gridlines.stroke.color;
      }
      if (_0x28df14.length == 0) {
        _0x28df14 = [0, 0, 0, 0];
      }
      var _0x2e5b66 = "sendCMYK(" + JSON.stringify(_0x28df14) + ")";
      csInterface.evalScript(_0x2e5b66);
    }
  });
  csInterface.addEventListener("rgbValues", function (_0x354ace) {
    rgbValue = _0x354ace.data;
    rgbValue = rgbValue.split(",");
    var _0x51987a = "rgb(" + Math.round(rgbValue[0]) + "," + Math.round(rgbValue[1]) + "," + Math.round(rgbValue[2]) + ")";
    buttonColorChange.style.backgroundColor = _0x51987a;
  });
  csInterface.addEventListener("swichButtonColors", function (_0x4df518) {
    var _0x5aeefc = _0x4df518.data;
    _0x5aeefc = _0x5aeefc.split(",s,");
    var _0x540d5f = _0x5aeefc[0].split(",");
    var _0x3258ec = _0x5aeefc[1].split(",");
    if (_0x540d5f.length != 0) {
      var _0x157570 = "rgb(" + Math.round(_0x540d5f[0]) + "," + Math.round(_0x540d5f[1]) + "," + Math.round(_0x540d5f[2]) + ")";
      buttonSwitch1.style.backgroundColor = _0x157570;
    }
    if (_0x3258ec.length != 0) {
      var _0x4ecb5b = "rgb(" + Math.round(_0x3258ec[0]) + "," + Math.round(_0x3258ec[1]) + "," + Math.round(_0x3258ec[2]) + ")";
      buttonSwitch2.style.backgroundColor = _0x4ecb5b;
    }
  });
  csInterface.addEventListener("makeVisibleButton", function (_0x1f08f6) {
    currentSection = _0x1f08f6.data;
    currentSection = currentSection.split(",");
    var _0x593e9b = document.getElementById("target-anchorsText");
    var _0x579079 = document.getElementById("target-anchors");
    if (currentSection[0] == "true") {
      _0x593e9b.style.display = "none";
      _0x579079.style.display = "block";
    } else {
      _0x593e9b.style.display = "flex";
      _0x579079.style.display = "none";
    }
    var _0x593e9b = document.getElementById("target-textHandles");
    var _0x579079 = document.getElementById("target-handles");
    if (currentSection[1] == "true") {
      _0x593e9b.style.display = "none";
      _0x579079.style.display = "block";
    } else {
      _0x593e9b.style.display = "flex";
      _0x579079.style.display = "none";
    }
    var _0x593e9b = document.getElementById("target-textOutlines");
    var _0x579079 = document.getElementById("target-outlines");
    if (currentSection[2] == "true") {
      _0x593e9b.style.display = "none";
      _0x579079.style.display = "block";
    } else {
      _0x593e9b.style.display = "flex";
      _0x579079.style.display = "none";
    }
    var _0x593e9b = document.getElementById("target-textGridlines");
    var _0x579079 = document.getElementById("target-gridlines");
    if (currentSection[3] == "true") {
      _0x593e9b.style.display = "none";
      _0x579079.style.display = "block";
    } else {
      _0x593e9b.style.display = "flex";
      _0x579079.style.display = "none";
    }
  });
  var _0x16ea48 = document.getElementById("anchorsSizeID");
  _0x16ea48.addEventListener("input", function () {
    dataUI.anchors.size = _0x16ea48.value;
  });
  var _0x125aa6 = document.getElementById("handlesSizeID");
  _0x125aa6.addEventListener("input", function () {
    dataUI.handles.size = _0x125aa6.value;
  });
  var _0x2f8154 = document.getElementById("input-fieldAnchors");
  _0x2f8154.addEventListener("input", function () {
    dataUI.anchors.stroke.width = _0x2f8154.value;
  });
  var _0x37ed1f = document.getElementById("input-fieldHandles");
  _0x37ed1f.addEventListener("input", function () {
    dataUI.handles.stroke.width = _0x37ed1f.value;
  });
  var _0x14298e = document.getElementById("input-fieldOutlines");
  _0x14298e.addEventListener("input", function () {
    dataUI.outlines.stroke.width = _0x14298e.value;
  });
  var _0x31944b = document.getElementById("input-fieldGridlines");
  _0x31944b.addEventListener("input", function () {
    dataUI.gridlines.stroke.width = _0x31944b.value;
  });
  window.onclick = function (_0x5e6640) {
    if (!_0x5e6640.target.matches(currentClass)) {
      var _0x2fc4f8 = document.getElementsByClassName("dropdown-content");
      var _0x725637;
      for (_0x725637 = 0; _0x725637 < _0x2fc4f8.length; _0x725637++) {
        var _0x27b8b6 = _0x2fc4f8[_0x725637];
        if (_0x27b8b6.classList.contains("show")) {
          _0x27b8b6.classList.remove("show");
        }
      }
    }
  };
  var _0xadc23d = document.getElementById("target-anchors");
  _0xadc23d.addEventListener("click", function () {
    var _0x5446e5 = "addDataTodataUI(" + JSON.stringify(dataUI) + ")";
    csInterface.evalScript(_0x5446e5);
    var _0x5446e5 = "targetAnchors()";
    csInterface.evalScript(_0x5446e5);
  });
  var _0x36bbea = document.getElementById("target-handles");
  _0x36bbea.addEventListener("click", function () {
    var _0x57e0ae = "addDataTodataUI(" + JSON.stringify(dataUI) + ")";
    csInterface.evalScript(_0x57e0ae);
    var _0x57e0ae = "targetHandles()";
    csInterface.evalScript(_0x57e0ae);
  });
  var _0x561175 = document.getElementById("target-outlines");
  _0x561175.addEventListener("click", function () {
    var _0x2367a3 = "addDataTodataUI(" + JSON.stringify(dataUI) + ")";
    csInterface.evalScript(_0x2367a3);
    var _0x2367a3 = "targetOutline()";
    csInterface.evalScript(_0x2367a3);
  });
  var _0x92b39b = document.getElementById("target-gridlines");
  _0x92b39b.addEventListener("click", function () {
    var _0x13712b = "addDataTodataUI(" + JSON.stringify(dataUI) + ")";
    csInterface.evalScript(_0x13712b);
    var _0x13712b = "targetGridline()";
    csInterface.evalScript(_0x13712b);
  });
}
function preferences() {
  document.getElementById("Preferences").addEventListener("click", preferencesClick);
  document.getElementById("numberCircTraj").addEventListener("change", function () {
    var _0x211dbb = document.getElementById("numCir");
    var _0x225a12 = this.value;
    if (_0x225a12 == "All") {
      _0x211dbb.style.opacity = "0.2";
      _0x211dbb.disabled = true;
    } else {
      _0x211dbb.style.opacity = "1";
      _0x211dbb.disabled = false;
    }
    dataUI.circular_trajectories.NumberCirTraj.option = _0x225a12;
  });
  document.getElementById("numCir").addEventListener("input", function () {
    var _0x3495aa = this.value;
    dataUI.circular_trajectories.NumberCirTraj.number = _0x3495aa;
  });
  csInterface.addEventListener("bezierArcs", function (_0x10e053) {
    circularTrajectories = _0x10e053.data;
  });
  csInterface.addEventListener("convertCircularTrajectories", function (_0x5933e9) {
    var _0x11b7fb = [];
    var _0x47c7a9 = dataUI.circular_trajectories.thresholdError;
    circularTrajectories = circularTrajectories.split(",").map(Number);
    for (var _0x5f15ce = 0; _0x5f15ce < circularTrajectories.length; _0x5f15ce += 8) {
      var _0x4dd853 = circularTrajectories.slice(_0x5f15ce, _0x5f15ce + 8);
      var _0x43c74a = new Bezier(_0x4dd853);
      arcs = _0x43c74a.arcs(_0x47c7a9);
      _0x11b7fb.push(arcs);
    }
    var _0x198969 = "circularTrajectoriesData(" + JSON.stringify(_0x11b7fb) + ")";
    csInterface.evalScript(_0x198969);
    var _0x198969 = "drawCircularTrajectories()";
    csInterface.evalScript(_0x198969);
  });
  var _0x5a0932 = {
    "0": 2,
    "1": 0.9,
    "2": 0.5,
    "3": 0.1,
    "4": 0.001
  };
  var _0x482c16 = document.getElementById("CircTrajSlider");
  _0x482c16.addEventListener("input", function () {
    const _0x593949 = _0x482c16.value;
    dataUI.circular_trajectories.thresholdError = _0x5a0932[_0x593949];
  });
  var _0x2d3c15 = document.getElementById("GridlineSenzitivity");
  _0x2d3c15.addEventListener("input", function () {
    dataUI.gridlines_level = Number(_0x2d3c15.value);
  });
  const _0x3614a0 = document.getElementById("toggleButton");
  let _0x35b453 = true;
  const _0x2218f9 = "Switch Off.png";
  const _0x103167 = "Switch On.png";
  _0x3614a0.addEventListener("click", function () {
    var _0x8ec1b1 = document.getElementById("CircTrajSlider");
    var _0xd49ff7 = document.getElementById("CircTrajSliderText");
    var _0x42715d = document.getElementById("slider-containerID");
    var _0x858c32 = document.getElementById("numberCircTrajText");
    var _0x51e26a = document.getElementById("numberCircTraj");
    var _0x1f2d04 = document.getElementById("numCir");
    if (_0x35b453) {
      _0x8ec1b1.disabled = false;
      _0x3614a0.style.backgroundImage = "url('Switch On.png')";
      dataUI.circular_trajectories.thresholdError = 0.5;
      _0x8ec1b1.value = 2;
      _0x42715d.style.opacity = "1";
      _0xd49ff7.style.opacity = "1";
      _0x858c32.style.opacity = "1";
      _0x51e26a.style.opacity = "1";
      _0x51e26a.disabled = false;
    } else {
      _0x3614a0.style.backgroundImage = "url('Switch Off.png')";
      dataUI.circular_trajectories.thresholdError = 0;
      _0x8ec1b1.value = 2;
      _0x8ec1b1.disabled = true;
      _0x42715d.style.opacity = "0.2";
      _0xd49ff7.style.opacity = "0.2";
      _0x858c32.style.opacity = "0.2";
      _0x51e26a.style.opacity = "0.2";
      _0x51e26a.value = "All";
      _0x51e26a.disabled = true;
      _0x1f2d04.style.opacity = "0.2";
      _0x1f2d04.value = "1";
      _0x1f2d04.disabled = true;
      dataUI.circular_trajectories.NumberCirTraj.option = "All";
      dataUI.circular_trajectories.NumberCirTraj.number = 1;
    }
    _0x35b453 = !_0x35b453;
  });
}
function showPopup() {
  const _0x81d656 = document.getElementById("popup");
  _0x81d656.style.display = _0x81d656.style.display === "block" ? "none" : "block";
}
function noColor() {
  if (currentId == "anchorsDropdownFill") {
    dataUI.anchors.fill = [];
    var _0x4de5ad = document.getElementById("fillAnchors");
    _0x4de5ad.style.background = "url('No Fill.png') no-repeat center center";
    _0x4de5ad.style.backgroundSize = "contain";
  }
  if (currentId == "anchorsDropdownStroke") {
    dataUI.anchors.stroke.color = [];
    var _0x4de5ad = document.getElementById("strokeAnchors");
    _0x4de5ad.style.background = "url('No Stroke.png') no-repeat center center";
    _0x4de5ad.style.backgroundSize = "contain";
  }
  if (currentId == "handlesDropdownFill") {
    dataUI.handles.fill = [];
    var _0x4de5ad = document.getElementById("fillHandles");
    _0x4de5ad.style.background = "url('No Fill.png') no-repeat center center";
    _0x4de5ad.style.backgroundSize = "contain";
  }
  if (currentId == "handlesDropdownStroke") {
    dataUI.handles.stroke.color = [];
    var _0x4de5ad = document.getElementById("strokeHandles");
    _0x4de5ad.style.background = "url('No Stroke.png') no-repeat center center";
    _0x4de5ad.style.backgroundSize = "contain";
  }
  if (currentId == "outlinesDropdownFill") {
    dataUI.outlines.fill = [];
    var _0x4de5ad = document.getElementById("fillOutlines");
    _0x4de5ad.style.background = "url('No Fill.png') no-repeat center center";
    _0x4de5ad.style.backgroundSize = "contain";
  }
  if (currentId == "outlinesDropdownStroke") {
    dataUI.outlines.stroke.color = [];
    var _0x4de5ad = document.getElementById("strokeOutlines");
    _0x4de5ad.style.background = "url('No Stroke.png') no-repeat center center";
    _0x4de5ad.style.backgroundSize = "contain";
  }
  if (currentId == "gridlinesDropdownStroke") {
    dataUI.gridlines.stroke.color = [];
    var _0x4de5ad = document.getElementById("strokeGridlines");
    _0x4de5ad.style.background = "url('No Stroke.png') no-repeat center center";
    _0x4de5ad.style.backgroundSize = "contain";
  }
}
function pickColor(_0xe7c16f) {
  pickColorType = _0xe7c16f;
  csInterface.evalScript("checkOpenFile()");
}
function changeColor(_0xf7ed74) {
  buttonColorChange = document.getElementById(_0xf7ed74);
  var _0x4f6ade = colorValue.split(",");
  if (currentId == "anchorsDropdownFill") {
    dataUI.anchors.fill = _0x4f6ade;
    document.getElementById("fillAnchors").style.background = "none";
  }
  if (currentId == "anchorsDropdownStroke") {
    dataUI.anchors.stroke.color = _0x4f6ade;
    document.getElementById("strokeAnchors").style.background = "url('No red transparent.png') no-repeat center center";
  }
  if (currentId == "handlesDropdownFill") {
    dataUI.handles.fill = _0x4f6ade;
    document.getElementById("fillHandles").style.background = "none";
  }
  if (currentId == "handlesDropdownStroke") {
    dataUI.handles.stroke.color = _0x4f6ade;
    document.getElementById("strokeHandles").style.background = "url('No red transparent.png') no-repeat center center";
  }
  if (currentId == "outlinesDropdownFill") {
    dataUI.outlines.fill = _0x4f6ade;
    document.getElementById("fillOutlines").style.background = "none";
  }
  if (currentId == "outlinesDropdownStroke") {
    dataUI.outlines.stroke.color = _0x4f6ade;
    document.getElementById("strokeOutlines").style.background = "url('No red transparent.png') no-repeat center center";
  }
  if (currentId == "gridlinesDropdownStroke") {
    dataUI.gridlines.stroke.color = _0x4f6ade;
    document.getElementById("strokeGridlines").style.background = "url('No red transparent.png') no-repeat center center";
  }
  var _0x29838d = "convertCMYKtoRGB(" + JSON.stringify(_0x4f6ade) + ")";
  csInterface.evalScript(_0x29838d);
}
function cmykToRgb(_0x37e228, _0x5d0e81, _0x1e59a0, _0x1a45d2) {
  var _0x37e228 = _0x37e228 / 100;
  var _0x5d0e81 = _0x5d0e81 / 100;
  var _0x1e59a0 = _0x1e59a0 / 100;
  var _0x1a45d2 = _0x1a45d2 / 100;
  var _0x1cd52a = (1 - _0x37e228) * 255 * (1 - _0x1a45d2);
  var _0x56c423 = (1 - _0x5d0e81) * 255 * (1 - _0x1a45d2);
  var _0x1d7306 = (1 - _0x1e59a0) * 255 * (1 - _0x1a45d2);
  _0x1cd52a = Math.round(_0x1cd52a);
  _0x56c423 = Math.round(_0x56c423);
  _0x1d7306 = Math.round(_0x1d7306);
  var _0x6b2067 = {
    r: _0x1cd52a,
    g: _0x56c423,
    b: _0x1d7306
  };
  return _0x6b2067;
}
function dropMenu(_0xdff1a2, _0x5d6dd3, _0x4f0ff2) {
  currentClass = _0xdff1a2;
  currentId = _0x5d6dd3;
  buttonID = _0x4f0ff2;
  document.getElementById(currentId).classList.toggle("show");
}
function switchButton(_0x23413a, _0x5ce524) {
  var _0x2ebb81;
  var _0x3ecd38;
  if (_0x23413a == "fillAnchors") {
    buttonSwitch1 = document.getElementById("fillAnchors");
    buttonSwitch2 = document.getElementById("strokeAnchors");
    if (dataUI.anchors.fill.length == 0) {
      buttonSwitch2.style.background = "url('No Stroke.png') no-repeat center center";
      buttonSwitch2.style.backgroundSize = "contain";
    } else {
      buttonSwitch2.style.background = "url('No red transparent.png') no-repeat center center";
      buttonSwitch2.style.backgroundColor = "#6d7172";
    }
    if (dataUI.anchors.stroke.color.length == 0) {
      buttonSwitch1.style.background = "url('No Fill.png') no-repeat center center";
      buttonSwitch1.style.backgroundSize = "contain";
      buttonSwitch1.style.backgroundColor = "#6d7172";
    } else {
      buttonSwitch1.style.background = "none";
    }
    var _0x26ae2e = dataUI.anchors.stroke.color;
    dataUI.anchors.stroke.color = dataUI.anchors.fill;
    dataUI.anchors.fill = _0x26ae2e;
    var _0x30907c = "swichButtonColorsCMYKtoRGB(" + JSON.stringify([dataUI.anchors.fill, dataUI.anchors.stroke.color]) + ")";
    csInterface.evalScript(_0x30907c);
  } else if (_0x23413a == "fillHandles") {
    buttonSwitch1 = document.getElementById("fillHandles");
    buttonSwitch2 = document.getElementById("strokeHandles");
    if (dataUI.handles.fill.length == 0) {
      buttonSwitch2.style.background = "url('No Stroke.png') no-repeat center center";
      buttonSwitch2.style.backgroundSize = "contain";
    } else {
      buttonSwitch2.style.background = "url('No red transparent.png') no-repeat center center";
      buttonSwitch2.style.backgroundColor = "#6d7172";
    }
    if (dataUI.handles.stroke.color.length == 0) {
      buttonSwitch1.style.background = "url('No Fill.png') no-repeat center center";
      buttonSwitch1.style.backgroundSize = "contain";
      buttonSwitch1.style.backgroundColor = "#6d7172";
    } else {
      buttonSwitch1.style.background = "none";
    }
    var _0x26ae2e = dataUI.handles.stroke.color;
    dataUI.handles.stroke.color = dataUI.handles.fill;
    dataUI.handles.fill = _0x26ae2e;
    var _0x30907c = "swichButtonColorsCMYKtoRGB(" + JSON.stringify([dataUI.handles.fill, dataUI.handles.stroke.color]) + ")";
    csInterface.evalScript(_0x30907c);
  } else if (_0x23413a == "fillOutlines") {
    buttonSwitch1 = document.getElementById("fillOutlines");
    buttonSwitch2 = document.getElementById("strokeOutlines");
    if (dataUI.outlines.fill.length == 0) {
      buttonSwitch2.style.background = "url('No Stroke.png') no-repeat center center";
      buttonSwitch2.style.backgroundSize = "contain";
    } else {
      buttonSwitch2.style.background = "url('No red transparent.png') no-repeat center center";
      buttonSwitch2.style.backgroundColor = "#6d7172";
    }
    if (dataUI.outlines.stroke.color.length == 0) {
      buttonSwitch1.style.background = "url('No Fill.png') no-repeat center center";
      buttonSwitch1.style.backgroundSize = "contain";
      buttonSwitch1.style.backgroundColor = "#6d7172";
    } else {
      buttonSwitch1.style.background = "none";
    }
    var _0x26ae2e = dataUI.outlines.stroke.color;
    dataUI.outlines.stroke.color = dataUI.outlines.fill;
    dataUI.outlines.fill = _0x26ae2e;
    var _0x30907c = "swichButtonColorsCMYKtoRGB(" + JSON.stringify([dataUI.outlines.fill, dataUI.outlines.stroke.color]) + ")";
    csInterface.evalScript(_0x30907c);
  }
}
function sleep(_0x181b9f) {
  var _0x1b6853 = new Date().getTime();
  while (_0x1b6853 + _0x181b9f >= new Date().getTime()) {}
}
var currentOb1 = "rt452gjhttutu";
verificationProc();
var currentOb = "rt452gjhttutu";
var currentOb2 = "rt452gjhttutu";