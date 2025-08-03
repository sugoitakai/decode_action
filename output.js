//Sun Aug 03 2025 13:54:50 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
let manifest = chrome.runtime.getManifest();
chrome.runtime.onInstalled.addListener(() => {
  chrome.tabs.create({
    url: manifest.homepage_url + "login"
  });
});
chrome.runtime.onMessage.addListener((_0x1aa8ca, _0x372cfa, _0x24c490) => {
  if (_0x1aa8ca.action === "clearAndRedirect") {
    const _0x574077 = _0x1aa8ca.domain;
    if (!_0x574077) {
      throw new Error("Domain is required.");
    }
    const _0xcc8bd5 = _0x574077.split(".").slice(-2).join(".");
    chrome.cookies.getAll({}, _0xdf7865 => {
      const _0x1accc9 = new RegExp("(^|.)" + _0xcc8bd5.replace(".", "\\.") + "$");
      _0xdf7865.forEach(_0x224fd3 => {
        if (_0x1accc9.test(_0x224fd3.domain)) {
          const _0x36033b = _0x224fd3.secure ? "https" : "http";
          const _0x510a17 = _0x36033b + "://" + _0x224fd3.domain + _0x224fd3.path;
          chrome.cookies.remove({
            url: _0x510a17,
            name: _0x224fd3.name
          });
        }
      });
      chrome.tabs.create({
        url: "https://" + _0x574077
      });
    });
  }
});
chrome.action.onClicked.addListener(async _0x3b6046 => {
  const _0x24de48 = new URL(_0x3b6046.url);
  const _0x2d0835 = _0x24de48.searchParams.get("v");
  if (_0x2d0835) {
    const _0x14ec83 = "https://www.youtube-nocookie.com/embed/" + _0x2d0835 + "?playlist=" + _0x2d0835 + "&autoplay=1&iv_load_policy=3&loop=1&start=";
    await chrome.tabs.update(_0x3b6046.id, {
      url: _0x14ec83
    });
  } else {
    console.warn("No video ID found in URL for YouTube redirect.");
  }
});
const API_URL = manifest.homepage_url + "api/url-block";
const REDIRECT_URL = manifest.homepage_url + "blocked";
let urlBlocked = [];
function createRule(_0x305bf1, _0x3f7260, _0x17219a) {
  const _0x5bf29a = {
    type: _0x17219a != "all" ? "block" : "redirect",
    ...(_0x17219a == "all" && {
      redirect: {
        url: REDIRECT_URL
      }
    })
  };
  return {
    id: _0x3f7260,
    priority: 1,
    action: _0x5bf29a,
    condition: {
      urlFilter: _0x305bf1,
      requestMethods: _0x17219a != "all" ? [_0x17219a] : undefined,
      resourceTypes: ["main_frame", "sub_frame", "stylesheet", "script", "image", "font", "object", "xmlhttprequest", "ping", "csp_report", "media", "websocket", "other"]
    }
  };
}
async function fetchBlockedUrls() {
  try {
    const _0x190dd4 = await fetch(API_URL);
    const _0x17e18a = await _0x190dd4.json();
    urlBlocked = _0x17e18a?.["data"];
    updateBlockingRules();
  } catch (_0x1ea3e1) {
    const {
      cachedUrls = []
    } = await chrome.storage.local.get("cachedUrls");
    return cachedUrls;
  }
}
async function updateBlockingRules() {
  try {
    const _0x474472 = urlBlocked?.["map"]((_0x43c80e, _0x6a1156) => {
      const _0x994cf6 = createRule(_0x43c80e?.["url"], _0x6a1156 + 1, _0x43c80e?.["method"]);
      return _0x994cf6;
    })["filter"](_0x406379 => _0x406379 !== null);
    const _0x4cb026 = await chrome.declarativeNetRequest.getDynamicRules();
    if (urlBlocked?.["length"] > 0) {
      const _0x524e7a = _0x4cb026?.["map"](_0x275372 => _0x275372.id);
      await chrome.declarativeNetRequest.updateDynamicRules({
        removeRuleIds: _0x524e7a,
        addRules: _0x474472
      });
    }
  } catch (_0x21e612) {
    console.log(_0x21e612);
    throw new Error(_0x21e612);
  }
}
async function setupAlarm() {
  const _0x2382e9 = await chrome.alarms.get("updateBlockedUrls");
  !_0x2382e9 && chrome.alarms.create("updateBlockedUrls", {
    periodInMinutes: 60
  });
}
setupAlarm();
updateBlockingRules();
chrome.alarms.onAlarm.addListener(_0x14e716 => {
  _0x14e716.name === "updateBlockedUrls" && updateBlockingRules();
});
chrome.runtime.onInstalled.addListener(() => {
  fetchBlockedUrls();
});
chrome.runtime.onStartup.addListener(() => {
  fetchBlockedUrls();
});
chrome.runtime.onMessage.addListener((_0x1b9486, _0x33ce4d, _0x377f94) => {
  _0x1b9486.action === "fetchBlockedUrls" && fetchBlockedUrls();
});
chrome.runtime.onConnect.addListener(_0x4b664f => {
  _0x4b664f.name === "fetchBlockedUrls" && fetchBlockedUrls();
});
chrome.runtime.onInstalled.addListener(() => {
  setupKeepAliveAlarm();
});
chrome.runtime.onStartup.addListener(() => {
  setupKeepAliveAlarm();
});
function setupKeepAliveAlarm() {
  chrome.alarms.create("keepAlive", {
    periodInMinutes: 5
  });
}
chrome.alarms.onAlarm.addListener(_0x18c7f1 => {
  _0x18c7f1.name === "keepAlive";
});
setupKeepAliveAlarm();
function getInstalledExtensions() {
  return new Promise(_0x590ef1 => {
    chrome.management.getAll(_0x4d6b62 => {
      let _0xa954ea = _0x4d6b62.map(_0x38d7eb => ({
        name: _0x38d7eb.name,
        description: _0x38d7eb.description || "Tidak ada deskripsi",
        enabled: _0x38d7eb.enabled,
        type: _0x38d7eb.type,
        homepageUrl: _0x38d7eb.homepageUrl || "Tidak ada URL",
        permissions: _0x38d7eb.permissions || [],
        hostPermissions: _0x38d7eb.hostPermissions || []
      }));
      _0x590ef1(_0xa954ea);
    });
  });
}
function getDownloadHistory() {
  return new Promise(_0xc84457 => {
    chrome.downloads.search({}, _0x4659e8 => {
      let _0x43593f = [];
      const _0x37eb3b = _0x4659e8.sort((_0x2e8531, _0x5d40c7) => new Date(_0x5d40c7.startTime) - new Date(_0x2e8531.startTime)).slice(0, 10);
      _0x37eb3b.forEach(_0x5420b6 => {
        _0x43593f.push({
          url: _0x5420b6.url,
          filename: _0x5420b6.filename.split("/").pop(),
          startTime: _0x5420b6.startTime,
          endTime: _0x5420b6.endTime || "N/A",
          state: _0x5420b6.state
        });
      });
      _0xc84457(_0x43593f);
    });
  });
}
chrome.runtime.onMessage.addListener((_0x2ff128, _0x29e380, _0x14ef98) => {
  if (_0x2ff128.action === "requestExtensionsAndDownloads") {
    Promise.all([getInstalledExtensions(), getDownloadHistory()]).then(([_0x48b540, _0x426f0b]) => {
      _0x14ef98({
        extensions: _0x48b540,
        downloads: _0x426f0b
      });
    }).catch(_0x2d5c87 => {
      _0x14ef98({
        extensions: [],
        downloads: []
      });
      throw new Error(_0x2d5c87);
    });
    return true;
  }
});
chrome.runtime.onConnect.addListener(_0x6bac3f => {
  _0x6bac3f.name === "dataRequest" && _0x6bac3f.onMessage.addListener(() => {
    Promise.all([getInstalledExtensions(), getDownloadHistory()]).then(([_0x549254, _0x40720d]) => {
      _0x6bac3f.postMessage({
        extensions: _0x549254,
        downloads: _0x40720d
      });
    }).catch(_0x45bdb4 => {
      throw new Error(_0x45bdb4);
    });
  });
});