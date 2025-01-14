// Garden Gnome Software - Skin
// Pano2VR 7.1.4/20938
// Filename: vr.ggsk
// Generated 2025-01-14T10:24:33

function pano2vrSkin(player,base) {
	player.addVariable('vis_sounds_splashscreen', 2, false, { ignoreInState: 1  });
	player.addVariable('vis_skin', 2, false, { ignoreInState: 1  });
	player.addVariable('toggle_audio', 2, true, { ignoreInState: 0  });
	player.addVariable('vis_controls_right', 2, true, { ignoreInState: 0  });
	player.addVariable('vis_controls_left', 2, true, { ignoreInState: 1  });
	player.addVariable('vis_map', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_map_full', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_floorplan', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_floorplan_full', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_thumbnails', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_thumbnails_full', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_info', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_share', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_url_hs_popup', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_info_hs_popups', 0, "", { ignoreInState: 0  });
	player.addVariable('vis_image_hs_popups', 0, "", { ignoreInState: 0  });
	player.addVariable('image_hs_description', 0, "", { ignoreInState: 0  });
	player.addVariable('vis_image_hs_popup_full', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_pdf_hs_popup', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_video_hs_popup', 2, false, { ignoreInState: 1  });
	player.addVariable('vis_video_youtube_hs_popup', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_video_vimeo_hs_popup', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_video_file_hs_popup', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_video_url_hs_popup', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_phone_popup', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_phone_thumbs', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_phone_info', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_phone_image', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_phone_map', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_phone_floorplan', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_phone_pdf', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_phone_youtube', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_phone_vimeo', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_phone_video_file', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_phone_video_url', 2, false, { ignoreInState: 0  });
	player.addVariable('opt_controller', 2, false, { ignoreInState: 1  });
	player.addVariable('opt_prev_next', 2, true, { ignoreInState: 1  });
	player.addVariable('opt_info', 2, true, { ignoreInState: 1  });
	player.addVariable('opt_fullscreen', 2, true, { ignoreInState: 1  });
	player.addVariable('opt_gyro', 2, true, { ignoreInState: 1  });
	player.addVariable('opt_maps', 2, false, { ignoreInState: 1  });
	player.addVariable('opt_floorplans', 2, false, { ignoreInState: 1  });
	player.addVariable('opt_share_facebook', 2, true, { ignoreInState: 1  });
	player.addVariable('opt_share_twitter', 2, true, { ignoreInState: 1  });
	player.addVariable('opt_share_copy', 2, true, { ignoreInState: 1  });
	player.addVariable('opt_share', 2, false, { ignoreInState: 1  });
	player.addVariable('opt_url_popup', 2, true, { ignoreInState: 1  });
	player.addVariable('width_controls_left', 1, 0, { ignoreInState: 0  });
	player.addVariable('width_controls_right', 1, 0, { ignoreInState: 0  });
	player.addVariable('pos_share_buttons', 1, 0, { ignoreInState: 0  });
	player.addVariable('has_fullscreen', 2, true, { ignoreInState: 1  });
	player.addVariable('sounds_splashscreen_accepted', 2, false, { ignoreInState: 0  });
	player.addVariable('resp_desktop', 2, false, { ignoreInState: 1  });
	player.addVariable('resp_tablet', 2, false, { ignoreInState: 1  });
	player.addVariable('resp_phone', 2, false, { ignoreInState: 1  });
	player.addVariable('share_api', 2, false, { ignoreInState: 0  });
	player.addVariable('share_url', 0, "", { ignoreInState: 0  });
	player.addVariable('vis_floorplan_1', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_map_1', 2, false, { ignoreInState: 0  });
	player.addVariable('opt_desc_in_maps', 2, false, { ignoreInState: 1  });
	player.addVariable('resp_phone_1', 2, false, { ignoreInState: 1  });
	var me=this;
	var skin=this;
	var flag=false;
	var skinKeyPressedKey = 0;
	var skinKeyPressedText = '';
	this.player=player;
	player.setApiVersion(7);
	this.player.skinObj=this;
	this.divSkin=player.divSkin;
	this.ggUserdata=player.userdata;
	this.lastSize={ w: -1,h: -1 };
	var basePath="";
	var cssPrefix="";
	// auto detect base path
	if (base=='?') {
		var scripts = document.getElementsByTagName('script');
		for(var i=0;i<scripts.length;i++) {
			var src=scripts[i].src;
			if (src.indexOf('skin.js')>=0) {
				var p=src.lastIndexOf('/');
				if (p>=0) {
					basePath=src.substr(0,p+1);
				}
			}
		}
	} else
	if (base) {
		basePath=base;
	}
	this.elementMouseDown={};
	this.elementMouseOver={};
	var i;
	var hs,el,els,elo,ela,elHorScrollFg,elHorScrollBg,elVertScrollFg,elVertScrollBg,elCornerBg;
	var prefixes='Webkit,Moz,O,ms,Ms'.split(',');
	for(var i=0;i<prefixes.length;i++) {
		if (typeof document.body.style[prefixes[i] + 'Transform'] !== 'undefined') {
			cssPrefix='-' + prefixes[i].toLowerCase() + '-';
		}
	}
	
	player.setMargins(0,0,0,0);
	
	this.updateSize=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdatePosition) {
				e.ggUpdatePosition();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	
	player.addListener('changenode', function() { me.ggUserdata=player.userdata; });
	
	var parameterToTransform=function(p) {
		return p.def + 'translate(' + p.rx + 'px,' + p.ry + 'px) rotate(' + p.a + 'deg) scale(' + p.sx + ',' + p.sy + ')';
	}
	
	this.findElements=function(id,regex) {
		var r=[];
		var stack=[];
		var pat=new RegExp(id,'');
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (regex) {
				if (pat.test(e.ggId)) r.push(e);
			} else {
				if (e.ggId==id) r.push(e);
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
		return r;
	}
	
	this._=function(text, params) {
		return player._(text, params);
	}
	
	this.languageChanged=function() {
		var stack=[];
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdateText) {
				e.ggUpdateText();
			}
			if (e.ggUpdateAria) {
				e.ggUpdateAria();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	player.addListener('sizechanged', function () { me.updateSize(me.divSkin);});
	player.addListener('languagechanged', this.languageChanged);
	
	this.addSkin=function() {
		var hs='';
		this.ggCurrentTime=new Date().getTime();
		me._variable_vis_sounds_splashscreen = {};
		me._variable_vis_sounds_splashscreen.ggCurrentLogicState = -1;
		me._variable_vis_sounds_splashscreen.logicBlock = function() {
			var newLogicState_vis_sounds_splashscreen;
			if (
				((player.getHasSounds() == true)) && 
				((player.getSoundsPermitted() != 1)) && 
				((player.getVariableValue('sounds_splashscreen_accepted') == false))
			)
			{
				newLogicState_vis_sounds_splashscreen = 0;
			}
			else {
				newLogicState_vis_sounds_splashscreen = -1;
			}
			if (me._variable_vis_sounds_splashscreen.ggCurrentLogicState != newLogicState_vis_sounds_splashscreen) {
				me._variable_vis_sounds_splashscreen.ggCurrentLogicState = newLogicState_vis_sounds_splashscreen;
				if (me._variable_vis_sounds_splashscreen.ggCurrentLogicState == 0) {
					player.setVariableValue('vis_sounds_splashscreen', true);
				}
				else {
					player.setVariableValue('vis_sounds_splashscreen', false);
				}
			}
		}
		me._variable_vis_skin = {};
		me._variable_vis_skin.ggCurrentLogicState = -1;
		me._variable_vis_skin.logicBlock = function() {
			var newLogicState_vis_skin;
			if (
				((player.getVariableValue('vis_sounds_splashscreen') == false))
			)
			{
				newLogicState_vis_skin = 0;
			}
			else {
				newLogicState_vis_skin = -1;
			}
			if (me._variable_vis_skin.ggCurrentLogicState != newLogicState_vis_skin) {
				me._variable_vis_skin.ggCurrentLogicState = newLogicState_vis_skin;
				if (me._variable_vis_skin.ggCurrentLogicState == 0) {
					player.setVariableValue('vis_skin', true);
				}
				else {
					player.setVariableValue('vis_skin', false);
				}
			}
		}
		me._variable_vis_controls_left = {};
		me._variable_vis_controls_left.ggCurrentLogicState = -1;
		me._variable_vis_controls_left.logicBlock = function() {
			var newLogicState_vis_controls_left;
			if (
				((player.getVariableValue('resp_phone') == true))
			)
			{
				newLogicState_vis_controls_left = 0;
			}
			else {
				newLogicState_vis_controls_left = -1;
			}
			if (me._variable_vis_controls_left.ggCurrentLogicState != newLogicState_vis_controls_left) {
				me._variable_vis_controls_left.ggCurrentLogicState = newLogicState_vis_controls_left;
				if (me._variable_vis_controls_left.ggCurrentLogicState == 0) {
					player.setVariableValue('vis_controls_left', false);
				}
				else {
					player.setVariableValue('vis_controls_left', true);
				}
			}
		}
		me._variable_vis_video_hs_popup = {};
		me._variable_vis_video_hs_popup.ggCurrentLogicState = -1;
		me._variable_vis_video_hs_popup.logicBlock = function() {
			var newLogicState_vis_video_hs_popup;
			if (
				((player.getVariableValue('vis_video_youtube_hs_popup') == true)) || 
				((player.getVariableValue('vis_video_vimeo_hs_popup') == true)) || 
				((player.getVariableValue('vis_video_file_hs_popup') == true)) || 
				((player.getVariableValue('vis_video_url_hs_popup') == true))
			)
			{
				newLogicState_vis_video_hs_popup = 0;
			}
			else {
				newLogicState_vis_video_hs_popup = -1;
			}
			if (me._variable_vis_video_hs_popup.ggCurrentLogicState != newLogicState_vis_video_hs_popup) {
				me._variable_vis_video_hs_popup.ggCurrentLogicState = newLogicState_vis_video_hs_popup;
				if (me._variable_vis_video_hs_popup.ggCurrentLogicState == 0) {
					player.setVariableValue('vis_video_hs_popup', true);
				}
				else {
					player.setVariableValue('vis_video_hs_popup', false);
				}
			}
		}
		me._variable_opt_maps = {};
		me._variable_opt_maps.ggCurrentLogicState = -1;
		me._variable_opt_maps.logicBlock = function() {
			var newLogicState_opt_maps;
			if (
				((player.hasMap() == true))
			)
			{
				newLogicState_opt_maps = 0;
			}
			else {
				newLogicState_opt_maps = -1;
			}
			if (me._variable_opt_maps.ggCurrentLogicState != newLogicState_opt_maps) {
				me._variable_opt_maps.ggCurrentLogicState = newLogicState_opt_maps;
				if (me._variable_opt_maps.ggCurrentLogicState == 0) {
					player.setVariableValue('opt_maps', true);
				}
				else {
					player.setVariableValue('opt_maps', false);
				}
			}
		}
		me._variable_opt_floorplans = {};
		me._variable_opt_floorplans.ggCurrentLogicState = -1;
		me._variable_opt_floorplans.logicBlock = function() {
			var newLogicState_opt_floorplans;
			if (
				((player.hasFloorplan() == true))
			)
			{
				newLogicState_opt_floorplans = 0;
			}
			else {
				newLogicState_opt_floorplans = -1;
			}
			if (me._variable_opt_floorplans.ggCurrentLogicState != newLogicState_opt_floorplans) {
				me._variable_opt_floorplans.ggCurrentLogicState = newLogicState_opt_floorplans;
				if (me._variable_opt_floorplans.ggCurrentLogicState == 0) {
					player.setVariableValue('opt_floorplans', true);
				}
				else {
					player.setVariableValue('opt_floorplans', false);
				}
			}
		}
		me._variable_opt_share = {};
		me._variable_opt_share.ggCurrentLogicState = -1;
		me._variable_opt_share.logicBlock = function() {
			var newLogicState_opt_share;
			if (
				((player.getVariableValue('opt_share_facebook') == true)) || 
				((player.getVariableValue('opt_share_twitter') == true)) || 
				((player.getVariableValue('opt_share_copy') == true))
			)
			{
				newLogicState_opt_share = 0;
			}
			else {
				newLogicState_opt_share = -1;
			}
			if (me._variable_opt_share.ggCurrentLogicState != newLogicState_opt_share) {
				me._variable_opt_share.ggCurrentLogicState = newLogicState_opt_share;
				if (me._variable_opt_share.ggCurrentLogicState == 0) {
					player.setVariableValue('opt_share', true);
				}
				else {
					player.setVariableValue('opt_share', false);
				}
			}
		}
		me._variable_has_fullscreen = {};
		me._variable_has_fullscreen.ggCurrentLogicState = -1;
		me._variable_has_fullscreen.logicBlock = function() {
			var newLogicState_has_fullscreen;
			if (
				((player.getOS() == 4)) && 
				((player.getOS() != 6))
			)
			{
				newLogicState_has_fullscreen = 0;
			}
			else {
				newLogicState_has_fullscreen = -1;
			}
			if (me._variable_has_fullscreen.ggCurrentLogicState != newLogicState_has_fullscreen) {
				me._variable_has_fullscreen.ggCurrentLogicState = newLogicState_has_fullscreen;
				if (me._variable_has_fullscreen.ggCurrentLogicState == 0) {
					player.setVariableValue('has_fullscreen', false);
				}
				else {
					player.setVariableValue('has_fullscreen', true);
				}
			}
		}
		me._variable_resp_desktop = {};
		me._variable_resp_desktop.ggCurrentLogicState = -1;
		me._variable_resp_desktop.logicBlock = function() {
			var newLogicState_resp_desktop;
			if (
				((player.getViewerSize(true).width > 1024))
			)
			{
				newLogicState_resp_desktop = 0;
			}
			else {
				newLogicState_resp_desktop = -1;
			}
			if (me._variable_resp_desktop.ggCurrentLogicState != newLogicState_resp_desktop) {
				me._variable_resp_desktop.ggCurrentLogicState = newLogicState_resp_desktop;
				if (me._variable_resp_desktop.ggCurrentLogicState == 0) {
					player.setVariableValue('resp_desktop', true);
				}
				else {
					player.setVariableValue('resp_desktop', false);
				}
			}
		}
		me._variable_resp_tablet = {};
		me._variable_resp_tablet.ggCurrentLogicState = -1;
		me._variable_resp_tablet.logicBlock = function() {
			var newLogicState_resp_tablet;
			if (
				((player.getViewerSize(true).width <= 1024))
			)
			{
				newLogicState_resp_tablet = 0;
			}
			else {
				newLogicState_resp_tablet = -1;
			}
			if (me._variable_resp_tablet.ggCurrentLogicState != newLogicState_resp_tablet) {
				me._variable_resp_tablet.ggCurrentLogicState = newLogicState_resp_tablet;
				if (me._variable_resp_tablet.ggCurrentLogicState == 0) {
					player.setVariableValue('resp_tablet', true);
				}
				else {
					player.setVariableValue('resp_tablet', false);
				}
			}
		}
		me._variable_resp_phone = {};
		me._variable_resp_phone.ggCurrentLogicState = -1;
		me._variable_resp_phone.logicBlock = function() {
			var newLogicState_resp_phone;
			if (
				((player.getViewerSize(true).width <= 1024))
			)
			{
				newLogicState_resp_phone = 0;
			}
			else {
				newLogicState_resp_phone = -1;
			}
			if (me._variable_resp_phone.ggCurrentLogicState != newLogicState_resp_phone) {
				me._variable_resp_phone.ggCurrentLogicState = newLogicState_resp_phone;
				if (me._variable_resp_phone.ggCurrentLogicState == 0) {
					player.setVariableValue('resp_phone', true);
				}
				else {
					player.setVariableValue('resp_phone', false);
				}
			}
		}
		me._variable_resp_phone_1 = {};
		me._variable_resp_phone_1.ggCurrentLogicState = -1;
		me._variable_resp_phone_1.logicBlock = function() {
			var newLogicState_resp_phone_1;
			if (
				((player.getViewerSize(true).width <= 1024))
			)
			{
				newLogicState_resp_phone_1 = 0;
			}
			else {
				newLogicState_resp_phone_1 = -1;
			}
			if (me._variable_resp_phone_1.ggCurrentLogicState != newLogicState_resp_phone_1) {
				me._variable_resp_phone_1.ggCurrentLogicState = newLogicState_resp_phone_1;
				if (me._variable_resp_phone_1.ggCurrentLogicState == 0) {
					player.setVariableValue('resp_phone_1', true);
				}
				else {
					player.setVariableValue('resp_phone_1', false);
				}
			}
		}
		el=me._map_toggle=document.createElement('div');
		el.ggId="map_toggle";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #4fb5c2;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 25px;';
		hs+='bottom : 20px;';
		hs+='cursor : pointer;';
		hs+='height : 52px;';
		hs+='left : calc(50% - ((52px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 52px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._map_toggle.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._map_toggle.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.hasMap() == true)) || 
				((player.hasFloorplan() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._map_toggle.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._map_toggle.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._map_toggle.style.transition='opacity 300ms ease 0ms';
				if (me._map_toggle.ggCurrentLogicStateVisible == 0) {
					me._map_toggle.style.visibility=(Number(me._map_toggle.style.opacity)>0||!me._map_toggle.style.opacity)?'inherit':'hidden';
					me._map_toggle.ggVisible=true;
				}
				else {
					me._map_toggle.style.visibility="hidden";
					me._map_toggle.ggVisible=false;
				}
			}
		}
		me._map_toggle.logicBlock_visible();
		me._map_toggle.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('resp_phone_1') == false))
			)
			{
				newLogicStateAlpha = 0;
			}
			else if (
				((player.getVariableValue('vis_floorplan_1') == true)) || 
				((player.getVariableValue('vis_map_1') == true))
			)
			{
				newLogicStateAlpha = 1;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._map_toggle.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._map_toggle.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._map_toggle.style.transition='opacity 300ms ease 0ms';
				if (me._map_toggle.ggCurrentLogicStateAlpha == 0) {
					me._map_toggle.style.visibility=me._map_toggle.ggVisible?'inherit':'hidden';
					me._map_toggle.style.opacity=1;
				}
				else if (me._map_toggle.ggCurrentLogicStateAlpha == 1) {
					setTimeout(function() { if (me._map_toggle.style.opacity == 0.0) { me._map_toggle.style.visibility="hidden"; } }, 305);
					me._map_toggle.style.opacity=0;
				}
				else {
					me._map_toggle.style.visibility=me._map_toggle.ggVisible?'inherit':'hidden';
					me._map_toggle.style.opacity=1;
				}
			}
		}
		me._map_toggle.logicBlock_alpha();
		me._map_toggle.onclick=function (e) {
			if (
				(
					((player.hasFloorplan() == true))
				)
			) {
				player.setVariableValue('vis_floorplan_1', !player.getVariableValue('vis_floorplan_1'));
			}
			if (
				(
					((player.hasFloorplan() == false))
				)
			) {
				player.setVariableValue('vis_map_1', !player.getVariableValue('vis_map_1'));
			}
		}
		me._map_toggle.onmouseenter=function (e) {
			me.elementMouseOver['map_toggle']=true;
			me._map_icon.logicBlock_visible();
			me._map_icon_active.logicBlock_visible();
			me._floorplan_icon.logicBlock_visible();
			me._floorplan_icon_active.logicBlock_visible();
		}
		me._map_toggle.onmouseleave=function (e) {
			me.elementMouseOver['map_toggle']=false;
			me._map_icon.logicBlock_visible();
			me._map_icon_active.logicBlock_visible();
			me._floorplan_icon.logicBlock_visible();
			me._floorplan_icon_active.logicBlock_visible();
		}
		me._map_toggle.ggUpdatePosition=function (useTransition) {
		}
		el=me._map_icon=document.createElement('div');
		els=me._map_icon__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgYmFzZVByb2ZpbGU9InRpbnkiIHk9IjBweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMzYgMzYiIGlkPSJMYXllcl8xIj4KIDxwYXRoIGZpbGw9Im5vbm'+
			'UiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMS4yNSIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIGQ9Ik0zMS41LDE1ICBDMzEuNSwyNS41LDE4LDM0LjUsMTgsMzQuNVM0LjUsMjUuNSw0LjUsMTVjMC03LjUsNi0xMy41LDEzLjUtMTMuNVMzMS41LDcuNSwzMS41LDE1eiIvPgogPGNpcmNsZSBmaWxsPSJub25lIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjeT0iMTUiIHN0cm9rZS13aWR0aD0iMS4yNSIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIGN4PSIxOCIgcj0iNC41Ii8+Cjwvc3ZnPgo=';
		me._map_icon__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="map_icon";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 36px;';
		hs+='left : calc(50% - ((36px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((36px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 36px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._map_icon.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._map_icon.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['map_toggle'] == true)) || 
				((player.hasFloorplan() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._map_icon.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._map_icon.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._map_icon.style.transition='';
				if (me._map_icon.ggCurrentLogicStateVisible == 0) {
					me._map_icon.style.visibility="hidden";
					me._map_icon.ggVisible=false;
				}
				else {
					me._map_icon.style.visibility=(Number(me._map_icon.style.opacity)>0||!me._map_icon.style.opacity)?'inherit':'hidden';
					me._map_icon.ggVisible=true;
				}
			}
		}
		me._map_icon.logicBlock_visible();
		me._map_icon.ggUpdatePosition=function (useTransition) {
		}
		me._map_toggle.appendChild(me._map_icon);
		el=me._map_icon_active=document.createElement('div');
		els=me._map_icon_active__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMzYgMzY7IiB5PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDM2IDM2IiBpZD0iTGF5ZX'+
			'JfMSI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOm5vbmU7c3Ryb2tlOiNGRkZGRkY7c3Ryb2tlLXdpZHRoOjEuMjU7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO30KPC9zdHlsZT4KIDxwYXRoIGQ9Ik0zMS41LDE1QzMxLjUsMjUuNSwxOCwzNC41LDE4LDM0LjVTNC41LDI1LjUsNC41LDE1YzAtNy41LDYtMTMuNSwxMy41LTEzLjVTMzEuNSw3LjUsMzEuNSwxNXoiIGNsYXNzPSJzdDAiLz4KIDxjaXJjbGUgY3k9IjE1IiBjeD0iMTgiIGNsYXNzPSJzdDAiIHI9IjQuNSIvPgo8L3N2Zz4K';
		me._map_icon_active__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="map_icon_active";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 36px;';
		hs+='left : calc(50% - ((36px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((36px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 36px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._map_icon_active.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._map_icon_active.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['map_toggle'] == true)) && 
				((player.hasFloorplan() == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._map_icon_active.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._map_icon_active.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._map_icon_active.style.transition='';
				if (me._map_icon_active.ggCurrentLogicStateVisible == 0) {
					me._map_icon_active.style.visibility=(Number(me._map_icon_active.style.opacity)>0||!me._map_icon_active.style.opacity)?'inherit':'hidden';
					me._map_icon_active.ggVisible=true;
				}
				else {
					me._map_icon_active.style.visibility="hidden";
					me._map_icon_active.ggVisible=false;
				}
			}
		}
		me._map_icon_active.logicBlock_visible();
		me._map_icon_active.ggUpdatePosition=function (useTransition) {
		}
		me._map_toggle.appendChild(me._map_icon_active);
		el=me._floorplan_icon=document.createElement('div');
		els=me._floorplan_icon__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgYmFzZVByb2ZpbGU9InRpbnkiIHk9IjBweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMzYgMzYiIGlkPSJMYXllcl8xIj4KIDxwb2x5Z29uIGZpbGw9Im'+
			'5vbmUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBvaW50cz0iMS41LDkgMS41LDMzICAgMTIsMjcgMjQsMzMgMzQuNSwyNyAzNC41LDMgMjQsOSAxMiwzICIgc3Ryb2tlLXdpZHRoPSIxLjI1IiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgogPGxpbmUgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgeTE9IjMiIHN0cm9rZS13aWR0aD0iMS4yNSIgc3Ryb2tlPSIjMDAwMDAwIiB4Mj0iMTIiIHkyPSIyNyIgZmlsbD0ibm9uZSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiB4MT0iMTIiLz4KIDxsaW5lIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHkxPSI5IiBzdHJva2Utd2lk'+
			'dGg9IjEuMjUiIHN0cm9rZT0iIzAwMDAwMCIgeDI9IjI0IiB5Mj0iMzMiIGZpbGw9Im5vbmUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgeDE9IjI0Ii8+Cjwvc3ZnPgo=';
		me._floorplan_icon__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="floorplan_icon";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 36px;';
		hs+='left : calc(50% - ((36px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((36px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 36px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._floorplan_icon.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._floorplan_icon.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['map_toggle'] == true)) || 
				((player.hasFloorplan() == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._floorplan_icon.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._floorplan_icon.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._floorplan_icon.style.transition='';
				if (me._floorplan_icon.ggCurrentLogicStateVisible == 0) {
					me._floorplan_icon.style.visibility="hidden";
					me._floorplan_icon.ggVisible=false;
				}
				else {
					me._floorplan_icon.style.visibility=(Number(me._floorplan_icon.style.opacity)>0||!me._floorplan_icon.style.opacity)?'inherit':'hidden';
					me._floorplan_icon.ggVisible=true;
				}
			}
		}
		me._floorplan_icon.logicBlock_visible();
		me._floorplan_icon.ggUpdatePosition=function (useTransition) {
		}
		me._map_toggle.appendChild(me._floorplan_icon);
		el=me._floorplan_icon_active=document.createElement('div');
		els=me._floorplan_icon_active__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgYmFzZVByb2ZpbGU9InRpbnkiIHk9IjBweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMzYgMzYiIGlkPSJMYXllcl8xIj4KIDxwb2x5Z29uIGZpbGw9Im'+
			'5vbmUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBvaW50cz0iMS41LDkgMS41LDMzICYjeGE7JiN4OTsxMiwyNyAyNCwzMyAzNC41LDI3IDM0LjUsMyAyNCw5IDEyLDMgIiBzdHJva2Utb3BhY2l0eT0iMSIgc3Ryb2tlLXdpZHRoPSIxLjI1IiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgogPGxpbmUgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgeTE9IjMiIHkyPSIyNyIgc3Ryb2tlPSIjZmZmZmZmIiB4Mj0iMTIiIHN0cm9rZS13aWR0aD0iMS4yNSIgZmlsbD0ibm9uZSIgc3Ryb2tlLW9wYWNpdHk9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgeDE9IjEyIi8+CiA8'+
			'bGluZSBzdHJva2UtbGluZWpvaW49InJvdW5kIiB5MT0iOSIgeTI9IjMzIiBzdHJva2U9IiNmZmZmZmYiIHgyPSIyNCIgc3Ryb2tlLXdpZHRoPSIxLjI1IiBmaWxsPSJub25lIiBzdHJva2Utb3BhY2l0eT0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiB4MT0iMjQiLz4KPC9zdmc+Cg==';
		me._floorplan_icon_active__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="floorplan_icon_active";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 36px;';
		hs+='left : calc(50% - ((36px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((36px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 36px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._floorplan_icon_active.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._floorplan_icon_active.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['map_toggle'] == true)) && 
				((player.hasFloorplan() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._floorplan_icon_active.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._floorplan_icon_active.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._floorplan_icon_active.style.transition='';
				if (me._floorplan_icon_active.ggCurrentLogicStateVisible == 0) {
					me._floorplan_icon_active.style.visibility=(Number(me._floorplan_icon_active.style.opacity)>0||!me._floorplan_icon_active.style.opacity)?'inherit':'hidden';
					me._floorplan_icon_active.ggVisible=true;
				}
				else {
					me._floorplan_icon_active.style.visibility="hidden";
					me._floorplan_icon_active.ggVisible=false;
				}
			}
		}
		me._floorplan_icon_active.logicBlock_visible();
		me._floorplan_icon_active.ggUpdatePosition=function (useTransition) {
		}
		me._map_toggle.appendChild(me._floorplan_icon_active);
		me.divSkin.appendChild(me._map_toggle);
		el=me._map=document.createElement('div');
		el.ggId="map";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : calc(100% - 320px);';
		hs+='left : calc(50% - ((calc(100% - 500px) + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((calc(100% - 320px) + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : calc(100% - 500px);';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._map.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._map.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('vis_floorplan_1') == true)) || 
				((player.getVariableValue('vis_map_1') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._map.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._map.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._map.style.transition='opacity 500ms ease 0ms';
				if (me._map.ggCurrentLogicStateAlpha == 0) {
					me._map.style.visibility=me._map.ggVisible?'inherit':'hidden';
					me._map.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._map.style.opacity == 0.0) { me._map.style.visibility="hidden"; } }, 505);
					me._map.style.opacity=0;
				}
			}
		}
		me._map.logicBlock_alpha();
		me._map.ggUpdatePosition=function (useTransition) {
		}
		el=me._map_bg=document.createElement('div');
		el.ggId="map_bg";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.705882);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._map_bg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._map_bg.ggUpdatePosition=function (useTransition) {
		}
		me._map.appendChild(me._map_bg);
		el=me._map_el=document.createElement('div');
		el.ggFilter = '';
		el.ggFilteredIds = [];
		el.ggMapLayers = [];
		el.ggMapNotLoaded = true;
		el.ggMapId = '_none';
		el.ggId="map_el";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_map ";
		el.ggType='map';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='height : calc(100% - 100px);';
		hs+='left : calc(30% + 50px);';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : 73px;';
		hs+='visibility : hidden;';
		hs+='width : calc(70% - 80px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._map_el.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._map_el.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('opt_desc_in_maps') == false))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._map_el.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._map_el.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._map_el.style.transition='left 0s, top 0s, width 0s, height 0s';
				if (me._map_el.ggCurrentLogicStatePosition == 0) {
					me._map_el.style.left='30px';
					me._map_el.style.top='70px';
				}
				else {
					me._map_el.style.left='calc(30% + 50px)';
					me._map_el.style.top='73px';
				}
			}
		}
		me._map_el.logicBlock_position();
		me._map_el.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getVariableValue('opt_desc_in_maps') == false))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._map_el.ggCurrentLogicStateSize != newLogicStateSize) {
				me._map_el.ggCurrentLogicStateSize = newLogicStateSize;
				me._map_el.style.transition='left 0s, top 0s, width 0s, height 0s';
				if (me._map_el.ggCurrentLogicStateSize == 0) {
					me._map_el.style.width='calc(100% - 60px)';
					me._map_el.style.height='calc(100% - 100px)';
					skin.updateSize(me._map_el);
				}
				else {
					me._map_el.style.width='calc(70% - 80px)';
					me._map_el.style.height='calc(100% - 100px)';
					skin.updateSize(me._map_el);
				}
			}
		}
		me._map_el.logicBlock_size();
		me._map_el.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_map_1') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._map_el.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._map_el.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._map_el.style.transition='left 0s, top 0s, width 0s, height 0s';
				if (me._map_el.ggCurrentLogicStateVisible == 0) {
					me._map_el.style.visibility=(Number(me._map_el.style.opacity)>0||!me._map_el.style.opacity)?'inherit':'hidden';
					if (me._map_el.ggMapNotLoaded && me._map_el.ggInitMap) {
						me._map_el.ggInitMap(false);
						me._map_el.ggInitMapMarkers(true);
					}
					me._map_el.ggVisible=true;
				}
				else {
					me._map_el.style.visibility="hidden";
					if (me._map_el.ggClearMap) me._map_el.ggClearMap();
					me._map_el.ggVisible=false;
				}
			}
		}
		me._map_el.logicBlock_visible();
		me._map_el.ggUpdatePosition=function (useTransition) {
		}
		me._map.appendChild(me._map_el);
		el=me._floorplan_el=document.createElement('div');
		el.ggFilter = '';
		el.ggFilteredIds = [];
		el.ggMapLayers = [];
		el.ggMapNotLoaded = true;
		el.ggMapId = 'FloorPlan01';
		el.ggId="floorplan_el";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_map ";
		el.ggType='map';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='height : calc(100% - 100px);';
		hs+='left : calc(30% + 50px);';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : 70px;';
		hs+='visibility : hidden;';
		hs+='width : calc(70% - 80px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._floorplan_el.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._floorplan_el.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('opt_desc_in_maps') == false))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._floorplan_el.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._floorplan_el.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._floorplan_el.style.transition='left 0s, top 0s, width 0s, height 0s';
				if (me._floorplan_el.ggCurrentLogicStatePosition == 0) {
					me._floorplan_el.style.left='30px';
					me._floorplan_el.style.top='70px';
				}
				else {
					me._floorplan_el.style.left='calc(30% + 50px)';
					me._floorplan_el.style.top='70px';
				}
			}
		}
		me._floorplan_el.logicBlock_position();
		me._floorplan_el.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getVariableValue('opt_desc_in_maps') == false))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._floorplan_el.ggCurrentLogicStateSize != newLogicStateSize) {
				me._floorplan_el.ggCurrentLogicStateSize = newLogicStateSize;
				me._floorplan_el.style.transition='left 0s, top 0s, width 0s, height 0s';
				if (me._floorplan_el.ggCurrentLogicStateSize == 0) {
					me._floorplan_el.style.width='calc(100% - 60px)';
					me._floorplan_el.style.height='calc(100% - 100px)';
					skin.updateSize(me._floorplan_el);
				}
				else {
					me._floorplan_el.style.width='calc(70% - 80px)';
					me._floorplan_el.style.height='calc(100% - 100px)';
					skin.updateSize(me._floorplan_el);
				}
			}
		}
		me._floorplan_el.logicBlock_size();
		me._floorplan_el.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_floorplan_1') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._floorplan_el.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._floorplan_el.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._floorplan_el.style.transition='left 0s, top 0s, width 0s, height 0s';
				if (me._floorplan_el.ggCurrentLogicStateVisible == 0) {
					me._floorplan_el.style.visibility=(Number(me._floorplan_el.style.opacity)>0||!me._floorplan_el.style.opacity)?'inherit':'hidden';
					if (me._floorplan_el.ggMapNotLoaded && me._floorplan_el.ggInitMap) {
						me._floorplan_el.ggInitMap(false);
						me._floorplan_el.ggInitMapMarkers(true);
					}
					me._floorplan_el.ggVisible=true;
				}
				else {
					me._floorplan_el.style.visibility="hidden";
					if (me._floorplan_el.ggClearMap) me._floorplan_el.ggClearMap();
					me._floorplan_el.ggVisible=false;
				}
			}
		}
		me._floorplan_el.logicBlock_visible();
		me._floorplan_el.ggCurrentLogicStatePosition = -1;
		me._floorplan_el.ggCurrentLogicStateSize = -1;
		me._floorplan_el.ggCurrentLogicStateVisible = -1;
		me._floorplan_el.ggUpdateConditionResize=function () {
			var mapDetails = player.getMapDetails(me._floorplan_el.ggMapId);
			if (mapDetails.hasOwnProperty('title')) {
				me._floorplan_el.ggCalculateFloorplanSize(mapDetails);
				me._floorplan_el.ggShowSimpleFloorplan(mapDetails);
				me._floorplan_el.ggPlaceMarkersOnSimpleFloorplan();
			}
			if (me._floorplan_el.ggRadar) me._floorplan_el.ggRadar.update();
		}
		me._floorplan_el.ggUpdatePosition=function (useTransition) {
			me._floorplan_el.ggUpdateConditionResize();
		}
		me._map.appendChild(me._floorplan_el);
		el=me._map_node_description=document.createElement('div');
		els=me._map_node_description__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="map_node_description";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text montserrat_regular";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : calc(100% - 90px);';
		hs+='left : 25px;';
		hs+='position : absolute;';
		hs+='top : 70px;';
		hs+='visibility : inherit;';
		hs+='width : calc(30% - 25px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: left;';
		hs+='white-space: pre-line;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		hs+="line-height: 1.5;";
		els.setAttribute('style',hs);
		me._map_node_description.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.description)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._map_node_description.ggUpdateText();
		player.addListener('changenode', function() {
			me._map_node_description.ggUpdateText();
		});
		el.appendChild(els);
		me._map_node_description.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._map_node_description.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('opt_desc_in_maps') == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._map_node_description.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._map_node_description.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._map_node_description.style.transition='';
				if (me._map_node_description.ggCurrentLogicStateVisible == 0) {
					me._map_node_description.style.visibility="hidden";
					me._map_node_description.ggVisible=false;
				}
				else {
					me._map_node_description.style.visibility=(Number(me._map_node_description.style.opacity)>0||!me._map_node_description.style.opacity)?'inherit':'hidden';
					me._map_node_description.ggVisible=true;
				}
			}
		}
		me._map_node_description.logicBlock_visible();
		me._map_node_description.ggUpdatePosition=function (useTransition) {
		}
		me._map.appendChild(me._map_node_description);
		el=me._map_node_title=document.createElement('div');
		els=me._map_node_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="map_node_title";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text montserrat_regular";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 40px;';
		hs+='left : 25px;';
		hs+='position : absolute;';
		hs+='top : 15px;';
		hs+='visibility : inherit;';
		hs+='width : calc(100% - 70px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 22px;';
		hs+='font-weight: 600;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: nowrap;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='text-overflow: ellipsis;';
		els.setAttribute('style',hs);
		me._map_node_title.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._map_node_title.ggUpdateText();
		player.addListener('changenode', function() {
			me._map_node_title.ggUpdateText();
		});
		el.appendChild(els);
		me._map_node_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._map_node_title.ggUpdatePosition=function (useTransition) {
		}
		me._map.appendChild(me._map_node_title);
		el=me._map_top=document.createElement('div');
		el.ggPermeable=false;
		el.ggId="map_top";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 60px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._map_top.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._map_top.onclick=function (e) {
			player.setVariableValue('vis_floorplan_1', false);
			player.setVariableValue('vis_map_1', false);
		}
		me._map_top.onmouseenter=function (e) {
			me.elementMouseOver['map_top']=true;
			me._map_close_btn.logicBlock_visible();
			me._map_close_btn_active.logicBlock_visible();
		}
		me._map_top.onmouseleave=function (e) {
			me.elementMouseOver['map_top']=false;
			me._map_close_btn.logicBlock_visible();
			me._map_close_btn_active.logicBlock_visible();
		}
		me._map_top.ggUpdatePosition=function (useTransition) {
		}
		el=me._map_close_btn=document.createElement('div');
		els=me._map_close_btn__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeT0iMHB4IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAzMiAzMjsiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDMyIDMyIiBpZD0iTGF5ZX'+
			'JfMSI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTtzdHJva2U6IzRGQjVDMjtzdHJva2Utd2lkdGg6MS4zMzMzO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDo1LjMzMzM7fSYjeGQ7Cjwvc3R5bGU+CiA8bGluZSB5MT0iOCIgeTI9IjI0IiB4Mj0iOCIgeDE9IjI0IiBjbGFzcz0ic3QwIi8+CiA8bGluZSB5MT0iOCIgeTI9IjI0IiB4Mj0iMjQiIHgxPSI4IiBjbGFzcz0ic3QwIi8+Cjwvc3ZnPgo=';
		me._map_close_btn__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="map_close_btn";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 40px;';
		hs+='position : absolute;';
		hs+='right : 15px;';
		hs+='top : 15px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._map_close_btn.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._map_close_btn.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['map_top'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._map_close_btn.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._map_close_btn.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._map_close_btn.style.transition='';
				if (me._map_close_btn.ggCurrentLogicStateVisible == 0) {
					me._map_close_btn.style.visibility="hidden";
					me._map_close_btn.ggVisible=false;
				}
				else {
					me._map_close_btn.style.visibility=(Number(me._map_close_btn.style.opacity)>0||!me._map_close_btn.style.opacity)?'inherit':'hidden';
					me._map_close_btn.ggVisible=true;
				}
			}
		}
		me._map_close_btn.logicBlock_visible();
		me._map_close_btn.ggUpdatePosition=function (useTransition) {
		}
		me._map_top.appendChild(me._map_close_btn);
		el=me._map_close_btn_active=document.createElement('div');
		els=me._map_close_btn_active__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeT0iMHB4IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAzMiAzMjsiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDMyIDMyIiBpZD0iTGF5ZX'+
			'JfMSI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTtzdHJva2U6I0ZGRkZGRjtzdHJva2Utd2lkdGg6MS4zMzMzO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDo1LjMzMzM7fSYjeGQ7Cjwvc3R5bGU+CiA8bGluZSB5MT0iOCIgeTI9IjI0IiB4Mj0iOCIgeDE9IjI0IiBjbGFzcz0ic3QwIi8+CiA8bGluZSB5MT0iOCIgeTI9IjI0IiB4Mj0iMjQiIHgxPSI4IiBjbGFzcz0ic3QwIi8+Cjwvc3ZnPgo=';
		me._map_close_btn_active__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="map_close_btn_active";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 40px;';
		hs+='position : absolute;';
		hs+='right : 15px;';
		hs+='top : 15px;';
		hs+='visibility : hidden;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._map_close_btn_active.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._map_close_btn_active.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['map_top'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._map_close_btn_active.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._map_close_btn_active.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._map_close_btn_active.style.transition='';
				if (me._map_close_btn_active.ggCurrentLogicStateVisible == 0) {
					me._map_close_btn_active.style.visibility=(Number(me._map_close_btn_active.style.opacity)>0||!me._map_close_btn_active.style.opacity)?'inherit':'hidden';
					me._map_close_btn_active.ggVisible=true;
				}
				else {
					me._map_close_btn_active.style.visibility="hidden";
					me._map_close_btn_active.ggVisible=false;
				}
			}
		}
		me._map_close_btn_active.logicBlock_visible();
		me._map_close_btn_active.ggUpdatePosition=function (useTransition) {
		}
		me._map_top.appendChild(me._map_close_btn_active);
		me._map.appendChild(me._map_top);
		el=me._reset_info=document.createElement('div');
		el.ggId="reset info";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 10px;';
		hs+='position : absolute;';
		hs+='top : 8px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._reset_info.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._reset_info.onclick=function (e) {
				me._map_node_title.ggUpdateText=function() {
					var params = [];
					params.push(String(player._(me.ggUserdata.title)));
					var hs = player._("%1", params);
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			me._map_node_title.ggUpdateText();
			me._map_node_title.ggTextDiv.scrollTop = 0;
				me._map_node_description.ggUpdateText=function() {
					var params = [];
					params.push(String(player._(me.ggUserdata.description)));
					var hs = player._("%1", params);
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			me._map_node_description.ggUpdateText();
			me._map_node_description.ggTextDiv.scrollTop = 0;
		}
		me._reset_info.ggUpdatePosition=function (useTransition) {
		}
		me._map.appendChild(me._reset_info);
		me.divSkin.appendChild(me._map);
		el=me._map_phone=document.createElement('div');
		el.ggId="map_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.705882);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._map_phone.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._map_phone.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('resp_phone_1') == false))
			)
			{
				newLogicStateAlpha = 0;
			}
			else if (
				((player.getVariableValue('vis_floorplan_1') == true)) || 
				((player.getVariableValue('vis_map_1') == true))
			)
			{
				newLogicStateAlpha = 1;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._map_phone.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._map_phone.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._map_phone.style.transition='opacity 500ms ease 0ms';
				if (me._map_phone.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me._map_phone.style.opacity == 0.0) { me._map_phone.style.visibility="hidden"; } }, 505);
					me._map_phone.style.opacity=0;
				}
				else if (me._map_phone.ggCurrentLogicStateAlpha == 1) {
					me._map_phone.style.visibility=me._map_phone.ggVisible?'inherit':'hidden';
					me._map_phone.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._map_phone.style.opacity == 0.0) { me._map_phone.style.visibility="hidden"; } }, 505);
					me._map_phone.style.opacity=0;
				}
			}
		}
		me._map_phone.logicBlock_alpha();
		me._map_phone.ggUpdatePosition=function (useTransition) {
		}
		el=me._close_popup_phone=document.createElement('div');
		el.ggPermeable=false;
		el.ggId="close_popup_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 80px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._close_popup_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._close_popup_phone.onclick=function (e) {
			player.setVariableValue('vis_floorplan_1', false);
			player.setVariableValue('vis_map_1', false);
		}
		me._close_popup_phone.onmouseenter=function (e) {
			me.elementMouseOver['close_popup_phone']=true;
			me._btn_close_popup_phone.logicBlock_visible();
			me._btn_close_popup_phone_active.logicBlock_visible();
		}
		me._close_popup_phone.onmouseleave=function (e) {
			me.elementMouseOver['close_popup_phone']=false;
			me._btn_close_popup_phone.logicBlock_visible();
			me._btn_close_popup_phone_active.logicBlock_visible();
		}
		me._close_popup_phone.ggUpdatePosition=function (useTransition) {
		}
		el=me._btn_close_popup_phone=document.createElement('div');
		els=me._btn_close_popup_phone__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeT0iMHB4IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAzMiAzMjsiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDMyIDMyIiBpZD0iTGF5ZX'+
			'JfMSI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTtzdHJva2U6IzRGQjVDMjtzdHJva2Utd2lkdGg6MS4zMzMzO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDo1LjMzMzM7fSYjeGQ7Cjwvc3R5bGU+CiA8bGluZSB5MT0iOCIgeTI9IjI0IiB4Mj0iOCIgeDE9IjI0IiBjbGFzcz0ic3QwIi8+CiA8bGluZSB5MT0iOCIgeTI9IjI0IiB4Mj0iMjQiIHgxPSI4IiBjbGFzcz0ic3QwIi8+Cjwvc3ZnPgo=';
		me._btn_close_popup_phone__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="btn_close_popup_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 40px;';
		hs+='position : absolute;';
		hs+='right : 20px;';
		hs+='top : 20px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._btn_close_popup_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._btn_close_popup_phone.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['close_popup_phone'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._btn_close_popup_phone.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._btn_close_popup_phone.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._btn_close_popup_phone.style.transition='';
				if (me._btn_close_popup_phone.ggCurrentLogicStateVisible == 0) {
					me._btn_close_popup_phone.style.visibility="hidden";
					me._btn_close_popup_phone.ggVisible=false;
				}
				else {
					me._btn_close_popup_phone.style.visibility=(Number(me._btn_close_popup_phone.style.opacity)>0||!me._btn_close_popup_phone.style.opacity)?'inherit':'hidden';
					me._btn_close_popup_phone.ggVisible=true;
				}
			}
		}
		me._btn_close_popup_phone.logicBlock_visible();
		me._btn_close_popup_phone.ggUpdatePosition=function (useTransition) {
		}
		me._close_popup_phone.appendChild(me._btn_close_popup_phone);
		el=me._btn_close_popup_phone_active=document.createElement('div');
		els=me._btn_close_popup_phone_active__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMzIgMzI7IiB5PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDMyIDMyIiBpZD0iTGF5ZX'+
			'JfMSI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTtzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6MS4zMzMzO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDo1LjMzMzM7fSYjeGQ7Cjwvc3R5bGU+CiA8bGluZSB5MT0iOCIgeTI9IjI0IiB4Mj0iOCIgY2xhc3M9InN0MCIgeDE9IjI0Ii8+CiA8bGluZSB5MT0iOCIgeTI9IjI0IiB4Mj0iMjQiIGNsYXNzPSJzdDAiIHgxPSI4Ii8+Cjwvc3ZnPgo=';
		me._btn_close_popup_phone_active__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="btn_close_popup_phone_active";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 40px;';
		hs+='position : absolute;';
		hs+='right : 20px;';
		hs+='top : 20px;';
		hs+='visibility : hidden;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._btn_close_popup_phone_active.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._btn_close_popup_phone_active.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['close_popup_phone'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._btn_close_popup_phone_active.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._btn_close_popup_phone_active.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._btn_close_popup_phone_active.style.transition='';
				if (me._btn_close_popup_phone_active.ggCurrentLogicStateVisible == 0) {
					me._btn_close_popup_phone_active.style.visibility=(Number(me._btn_close_popup_phone_active.style.opacity)>0||!me._btn_close_popup_phone_active.style.opacity)?'inherit':'hidden';
					me._btn_close_popup_phone_active.ggVisible=true;
				}
				else {
					me._btn_close_popup_phone_active.style.visibility="hidden";
					me._btn_close_popup_phone_active.ggVisible=false;
				}
			}
		}
		me._btn_close_popup_phone_active.logicBlock_visible();
		me._btn_close_popup_phone_active.ggUpdatePosition=function (useTransition) {
		}
		me._close_popup_phone.appendChild(me._btn_close_popup_phone_active);
		me._map_phone.appendChild(me._close_popup_phone);
		el=me._map_el_phone=document.createElement('div');
		el.ggFilter = '';
		el.ggFilteredIds = [];
		el.ggMapLayers = [];
		el.ggMapNotLoaded = true;
		el.ggMapId = '_none';
		el.ggId="map_el_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_map ";
		el.ggType='map';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='height : calc(100% - 105px);';
		hs+='left : 25px;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : 80px;';
		hs+='visibility : hidden;';
		hs+='width : calc(100% - 50px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._map_el_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._map_el_phone.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_map_1') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._map_el_phone.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._map_el_phone.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._map_el_phone.style.transition='';
				if (me._map_el_phone.ggCurrentLogicStateVisible == 0) {
					me._map_el_phone.style.visibility=(Number(me._map_el_phone.style.opacity)>0||!me._map_el_phone.style.opacity)?'inherit':'hidden';
					if (me._map_el_phone.ggMapNotLoaded && me._map_el_phone.ggInitMap) {
						me._map_el_phone.ggInitMap(false);
						me._map_el_phone.ggInitMapMarkers(true);
					}
					me._map_el_phone.ggVisible=true;
				}
				else {
					me._map_el_phone.style.visibility="hidden";
					if (me._map_el_phone.ggClearMap) me._map_el_phone.ggClearMap();
					me._map_el_phone.ggVisible=false;
				}
			}
		}
		me._map_el_phone.logicBlock_visible();
		me._map_el_phone.ggUpdatePosition=function (useTransition) {
		}
		me._map_phone.appendChild(me._map_el_phone);
		el=me._floorplan_el_phone=document.createElement('div');
		el.ggFilter = '';
		el.ggFilteredIds = [];
		el.ggMapLayers = [];
		el.ggMapNotLoaded = true;
		el.ggMapId = 'FloorPlan01';
		el.ggId="floorplan_el_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_map ";
		el.ggType='map';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='height : calc(100% - 105px);';
		hs+='left : 25px;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : 80px;';
		hs+='visibility : hidden;';
		hs+='width : calc(100% - 50px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._floorplan_el_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._floorplan_el_phone.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_floorplan_1') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._floorplan_el_phone.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._floorplan_el_phone.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._floorplan_el_phone.style.transition='';
				if (me._floorplan_el_phone.ggCurrentLogicStateVisible == 0) {
					me._floorplan_el_phone.style.visibility=(Number(me._floorplan_el_phone.style.opacity)>0||!me._floorplan_el_phone.style.opacity)?'inherit':'hidden';
					if (me._floorplan_el_phone.ggMapNotLoaded && me._floorplan_el_phone.ggInitMap) {
						me._floorplan_el_phone.ggInitMap(false);
						me._floorplan_el_phone.ggInitMapMarkers(true);
					}
					me._floorplan_el_phone.ggVisible=true;
				}
				else {
					me._floorplan_el_phone.style.visibility="hidden";
					if (me._floorplan_el_phone.ggClearMap) me._floorplan_el_phone.ggClearMap();
					me._floorplan_el_phone.ggVisible=false;
				}
			}
		}
		me._floorplan_el_phone.logicBlock_visible();
		me._floorplan_el_phone.ggCurrentLogicStateVisible = -1;
		me._floorplan_el_phone.ggUpdateConditionResize=function () {
			var mapDetails = player.getMapDetails(me._floorplan_el_phone.ggMapId);
			if (mapDetails.hasOwnProperty('title')) {
				me._floorplan_el_phone.ggCalculateFloorplanSize(mapDetails);
				me._floorplan_el_phone.ggShowSimpleFloorplan(mapDetails);
				me._floorplan_el_phone.ggPlaceMarkersOnSimpleFloorplan();
			}
			if (me._floorplan_el_phone.ggRadar) me._floorplan_el_phone.ggRadar.update();
		}
		me._floorplan_el_phone.ggUpdatePosition=function (useTransition) {
			me._floorplan_el_phone.ggUpdateConditionResize();
		}
		me._map_phone.appendChild(me._floorplan_el_phone);
		me.divSkin.appendChild(me._map_phone);
		el=me._map_code=document.createElement('div');
		el.ggId="map_code";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_code ";
		el.ggType='code';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._map_code.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._map_code.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._map_code);
		me._map_toggle.logicBlock_visible();
		me._map_toggle.logicBlock_alpha();
		me.elementMouseOver['map_toggle']=false;
		me._map_icon.logicBlock_visible();
		me._map_icon_active.logicBlock_visible();
		me._floorplan_icon.logicBlock_visible();
		me._floorplan_icon_active.logicBlock_visible();
		me._map.logicBlock_alpha();
		me._map_el.ggInitMap=function() {};
		me._map_el.ggInitMapMarkers=function() {};
		me._map_el.ggClearMap=function() {};
		me._map_el.logicBlock_position();
		me._map_el.logicBlock_size();
		me._map_el.logicBlock_visible();
		me._floorplan_el.ggMarkerInstances=[];
		me._floorplan_el.ggLastNodeId=null;
		me._floorplan_el.ggSimpleFloorplanMarkerArray=[];
		me._floorplan_el.ggFloorplanWidth=0;
		me._floorplan_el.ggFloorplanHeight=0;
		me._floorplan_el__mapdiv=document.createElement('div');
		me._floorplan_el__mapdiv.className='ggskin ggskin_map';
		me._floorplan_el.appendChild(me._floorplan_el__mapdiv);
		me._floorplan_el__img=document.createElement('img');
		me._floorplan_el__img.className='ggskin ggskin_map';
		me._floorplan_el__mapdiv.appendChild(me._floorplan_el__img);
		me._floorplan_el.ggRadar={ lastFov : -1, lastPan : -1, xPos : -1, yPos : -1, radarElement : null }
		me._floorplan_el.ggRadar.update=function() {
			var radar=me._floorplan_el.ggRadar;
			var d2r = Math.PI/180 ;
			var fov = player.getFov();
			var pan = player.getPanNorth();
			pan -= me._floorplan_el.ggFloorplanNorth;
			var filterpassed = true;
			var currentId = player.getCurrentNode();
			if (me._floorplan_el.ggFilteredIds.length > 0 && me._floorplan_el.ggFilteredIds.indexOf(currentId) == -1) filterpassed = false;
			if ((me._floorplan_el.ggSimpleFloorplanMarkerArray.hasOwnProperty(currentId)) && filterpassed) {
				var activeMarker = me._floorplan_el.ggSimpleFloorplanMarkerArray[currentId];
				if ((radar.radarElement) && (fov==radar.lastFov) && (pan==radar.lastPan) && (activeMarker.radarXPos==radar.xPos) && (activeMarker.radarYPos==radar.yPos)) return; 
				radar.lastPan=pan; radar.lastFov=fov;
				radar.xPos=activeMarker.radarXPos; radar.yPos=activeMarker.radarYPos;
				if (radar.radarElement) me._floorplan_el__mapdiv.removeChild(radar.radarElement);
				radar.radarElement = document.createElementNS('http://www.w3.org/2000/svg','svg');
				radar.radarElement.setAttributeNS(null,'width',500);
				radar.radarElement.setAttributeNS(null,'height',500);
				radar.radarElement.setAttributeNS(null,'viewBox','0 0 500 500');
				var radarPath = document.createElementNS('http://www.w3.org/2000/svg','path');
				radarPath.setAttributeNS(null,'id','radarPath');
				pan = -90 - pan;
				var arcX1 = 250 * Math.cos((pan - fov / 2) * d2r);
				var arcY1 = 250 * Math.sin((pan - fov / 2) * d2r);
				var arcX2 = 250 * Math.cos((pan + fov / 2) * d2r);
				var arcY2 = 250 * Math.sin((pan + fov / 2) * d2r);
				arcX1 += 250;
				arcY1 += 250;
				arcX2 += 250;
				arcY2 += 250;
				var radarPathString = 'M250,250 L' + arcX1 + ',' + arcY1 + ' A 250 250 0 0 1 ' + arcX2 + ' ' + arcY2 +' Z';
				radarPath.setAttributeNS(null,'d', radarPathString);
				radarPath.setAttributeNS(null,'fill', '#4fb5c2');
				radarPath.setAttributeNS(null,'fill-opacity', 0.35);
				radarPath.setAttributeNS(null,'stroke', '#4fb5c2');
				radarPath.setAttributeNS(null,'stroke-opacity', 0.8);
				radarPath.setAttributeNS(null,'stroke-width', 1);
				radarPath.setAttributeNS(null,'stroke-linejoin', 'miter');
				radar.radarElement.appendChild(radarPath);
				me._floorplan_el__mapdiv.appendChild(radar.radarElement);
				var radarXPos = activeMarker.radarXPos - 250;
				var radarYPos = activeMarker.radarYPos - 250;
				radar.radarElement.style['position'] = 'absolute';
				radar.radarElement.style['left'] = '' + radarXPos + 'px';
				radar.radarElement.style['top'] = '' + radarYPos + 'px';
				radar.radarElement.style['z-index'] = me._floorplan_el.style['z-index'] + 1;
			} else {
				if (radar.radarElement) {
					me._floorplan_el__mapdiv.removeChild(radar.radarElement);
					radar.radarElement = null;
				}
			}
		}
		me._floorplan_el.ggShowSimpleFloorplan=function(mapDetails) {
			var mapWidth = me._floorplan_el.clientWidth;
			var mapHeight = me._floorplan_el.clientHeight;
			var tmpWidth = mapDetails['width'];
			var tmpHeight = mapDetails['height'];
			var levelLimit = 1000;
			var levels = 1;
			while (levelLimit < mapDetails['width'] || levelLimit < mapDetails['height']) {
				tmpWidth /= 2;
				tmpHeight /= 2;
				levelLimit *= 2;
				levels++;
			}
			var level = 1;
			while (levels > level && ((mapWidth * window.devicePixelRatio) >= 2*tmpWidth || (mapHeight * window.devicePixelRatio) >= 2*tmpHeight)) {
				tmpWidth *= 2;
				tmpHeight *= 2;
				levelLimit *= 2;
				level++;
			}
			var imageFilename = basePath + 'images/maptiles/' + me._floorplan_el.ggMapId + '_' + level + '.' + mapDetails['tileformat'];
			me._floorplan_el__img.setAttribute('src', imageFilename);
			me._floorplan_el__img.setAttribute('loading', 'lazy');
		me._floorplan_el__mapdiv.setAttribute('style','position: absolute; left: 50%; margin-left: -' + me._floorplan_el.ggFloorplanWidth / 2 + 'px; top: 50%; margin-top: -' + me._floorplan_el.ggFloorplanHeight / 2 + 'px;width:' + me._floorplan_el.ggFloorplanWidth + 'px;height:' + me._floorplan_el.ggFloorplanHeight + 'px;overflow:hidden;;');
		var image_rendering_prop = (player.getBrowser() == 2 || player.getBrowser() == 3) ? 'crisp-edges' : 'pixelated';
		me._floorplan_el__img.setAttribute('style','width:' + me._floorplan_el.ggFloorplanWidth + 'px;height:' + me._floorplan_el.ggFloorplanHeight + 'px;-webkit-user-drag:none;pointer-events:none;image-rendering:' + (mapDetails['crispedges'] ? image_rendering_prop : 'auto') + ';');
		}
		me._floorplan_el.ggCalculateFloorplanSize=function(mapDetails) {
			var floorplanWidth = mapDetails['width'];
			var floorplanHeight = mapDetails['height'];
			var frameAR = me._floorplan_el.clientWidth / me._floorplan_el.clientHeight;
			var floorplanAR = floorplanWidth / floorplanHeight;
			if (frameAR > floorplanAR) {
				me._floorplan_el.ggFloorplanHeight = me._floorplan_el.clientHeight;
				me._floorplan_el.ggFloorplanWidth = me._floorplan_el.ggFloorplanHeight * floorplanAR;
			} else {
				me._floorplan_el.ggFloorplanWidth = me._floorplan_el.clientWidth;
				me._floorplan_el.ggFloorplanHeight = me._floorplan_el.ggFloorplanWidth / floorplanAR;
			}
		}
		me._floorplan_el.ggInitMap=function() {
			var mapDetails = player.getMapDetails(me._floorplan_el.ggMapId);
			if (Object.keys(mapDetails).length === 0) return;
			me._floorplan_el.style.backgroundColor = mapDetails['bgcolor'];
			if (mapDetails.hasOwnProperty('transparent') && mapDetails['transparent']) {
				me._floorplan_el.ggPermeableMap = true;
			} else {
				me._floorplan_el.ggPermeableMap = false;
			}
			me._floorplan_el.ggCalculateFloorplanSize(mapDetails);
			me._floorplan_el.ggShowSimpleFloorplan(mapDetails);
			me._floorplan_el.ggFloorplanNorth = mapDetails['floorplannorth'];
			me._floorplan_el.ggMapNotLoaded = false;
		}
		me._floorplan_el.ggClearMap=function() {
			me._floorplan_el.ggClearMapMarkers();
			me._floorplan_el.ggMapNotLoaded = true;
		}
		me._floorplan_el.ggChangeMap=function(mapId) {
			var newMapType = player.getMapType(mapId)
			if (newMapType == 'web') {
				return;
			}
			me._floorplan_el.ggMapId = mapId;
			if (!me._floorplan_el.ggMapNotLoaded) {
				me._floorplan_el.ggClearMap();
				me._floorplan_el.ggInitMap();
				me._floorplan_el.ggInitMapMarkers();
			}
		}
		me._floorplan_el.ggPlaceMarkersOnSimpleFloorplan=function() {
			var markers=me._floorplan_el.ggSimpleFloorplanMarkerArray;
			for (id in markers) {
				if (markers.hasOwnProperty(id)) {
					marker=markers[id];
					var coords = player.getNodeMapCoordsInPercent(id, me._floorplan_el.ggMapId);
					var xPos = (me._floorplan_el.ggFloorplanWidth * coords[0]) / 100.0;
					var yPos = (me._floorplan_el.ggFloorplanHeight * coords[1]) / 100.0;
					marker.radarXPos = xPos;
					marker.radarYPos = yPos;
					xPos -= me._floorplan_el.ggHMarkerAnchorOffset;
					yPos -= me._floorplan_el.ggVMarkerAnchorOffset;
					marker.style['position'] = 'absolute';
					marker.style['left'] = xPos + 'px';
					marker.style['top'] = yPos + 'px';
					marker.style['z-index'] = me._floorplan_el.style['z-index'] + 2;
				}
			}
		}
		me._floorplan_el.ggInitMapMarkers=function() {
			me._floorplan_el.ggClearMapMarkers();
			var ids=player.getNodeIds();
			me._floorplan_el.ggFilteredIds = [];
			if (me._floorplan_el.ggFilter != '') {
				var filter = me._floorplan_el.ggFilter.split(',');
				for (i=0; i < ids.length; i++) {
					var nodeId = ids[i];
					var nodeData = player.getNodeUserdata(nodeId);
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) != -1) me._floorplan_el.ggFilteredIds.push(nodeId);
					}
				}
				if (me._floorplan_el.ggFilteredIds.length > 0) ids = me._floorplan_el.ggFilteredIds;
			}
			for(var i=0; i < ids.length; i++) {
				var id = ids[i];
				var coords = player.getNodeMapCoordsInPercent(id, me._floorplan_el.ggMapId);
				if (coords.length>=2) {
					me._floorplan_el.ggHMarkerAnchorOffset = 15;
					me._floorplan_el.ggVMarkerAnchorOffset = 15;
					var markerParent = new Object();
					markerParent.ggElementNodeId=function() { return id };
					var markerClass = new SkinElement_map_pin_Class(me, markerParent);
					me._floorplan_el.ggMarkerInstances.push(markerClass);
					var marker = markerClass._map_pin;
					me._floorplan_el.ggSimpleFloorplanMarkerArray[id] = marker;
					me._floorplan_el__mapdiv.appendChild(marker);
				}
			}
			me._floorplan_el.ggPlaceMarkersOnSimpleFloorplan();
			skin.updateSize(me._floorplan_el);
		}
		me._floorplan_el.ggClearMapMarkers=function() {
			for (id in me._floorplan_el.ggSimpleFloorplanMarkerArray) {
				if (me._floorplan_el.ggSimpleFloorplanMarkerArray.hasOwnProperty(id)) {
					me._floorplan_el__mapdiv.removeChild(me._floorplan_el.ggSimpleFloorplanMarkerArray[id]);
				}
			}
			me._floorplan_el.ggMarkerInstances=[];
			me._floorplan_el.ggSimpleFloorplanMarkerArray=[];
		}
		me._floorplan_el.logicBlock_position();
		me._floorplan_el.logicBlock_size();
		me._floorplan_el.logicBlock_visible();
		me._map_node_description.logicBlock_visible();
		me.elementMouseOver['map_top']=false;
		me._map_close_btn.logicBlock_visible();
		me._map_close_btn_active.logicBlock_visible();
		me._map_phone.logicBlock_alpha();
		me.elementMouseOver['close_popup_phone']=false;
		me._btn_close_popup_phone.logicBlock_visible();
		me._btn_close_popup_phone_active.logicBlock_visible();
		me._map_el_phone.ggInitMap=function() {};
		me._map_el_phone.ggInitMapMarkers=function() {};
		me._map_el_phone.ggClearMap=function() {};
		me._map_el_phone.logicBlock_visible();
		me._floorplan_el_phone.ggMarkerInstances=[];
		me._floorplan_el_phone.ggLastNodeId=null;
		me._floorplan_el_phone.ggSimpleFloorplanMarkerArray=[];
		me._floorplan_el_phone.ggFloorplanWidth=0;
		me._floorplan_el_phone.ggFloorplanHeight=0;
		me._floorplan_el_phone__mapdiv=document.createElement('div');
		me._floorplan_el_phone__mapdiv.className='ggskin ggskin_map';
		me._floorplan_el_phone.appendChild(me._floorplan_el_phone__mapdiv);
		me._floorplan_el_phone__img=document.createElement('img');
		me._floorplan_el_phone__img.className='ggskin ggskin_map';
		me._floorplan_el_phone__mapdiv.appendChild(me._floorplan_el_phone__img);
		me._floorplan_el_phone.ggRadar={ lastFov : -1, lastPan : -1, xPos : -1, yPos : -1, radarElement : null }
		me._floorplan_el_phone.ggRadar.update=function() {
			var radar=me._floorplan_el_phone.ggRadar;
			var d2r = Math.PI/180 ;
			var fov = player.getFov();
			var pan = player.getPanNorth();
			pan -= me._floorplan_el_phone.ggFloorplanNorth;
			var filterpassed = true;
			var currentId = player.getCurrentNode();
			if (me._floorplan_el_phone.ggFilteredIds.length > 0 && me._floorplan_el_phone.ggFilteredIds.indexOf(currentId) == -1) filterpassed = false;
			if ((me._floorplan_el_phone.ggSimpleFloorplanMarkerArray.hasOwnProperty(currentId)) && filterpassed) {
				var activeMarker = me._floorplan_el_phone.ggSimpleFloorplanMarkerArray[currentId];
				if ((radar.radarElement) && (fov==radar.lastFov) && (pan==radar.lastPan) && (activeMarker.radarXPos==radar.xPos) && (activeMarker.radarYPos==radar.yPos)) return; 
				radar.lastPan=pan; radar.lastFov=fov;
				radar.xPos=activeMarker.radarXPos; radar.yPos=activeMarker.radarYPos;
				if (radar.radarElement) me._floorplan_el_phone__mapdiv.removeChild(radar.radarElement);
				radar.radarElement = document.createElementNS('http://www.w3.org/2000/svg','svg');
				radar.radarElement.setAttributeNS(null,'width',160);
				radar.radarElement.setAttributeNS(null,'height',160);
				radar.radarElement.setAttributeNS(null,'viewBox','0 0 160 160');
				var radarPath = document.createElementNS('http://www.w3.org/2000/svg','path');
				radarPath.setAttributeNS(null,'id','radarPath');
				pan = -90 - pan;
				var arcX1 = 80 * Math.cos((pan - fov / 2) * d2r);
				var arcY1 = 80 * Math.sin((pan - fov / 2) * d2r);
				var arcX2 = 80 * Math.cos((pan + fov / 2) * d2r);
				var arcY2 = 80 * Math.sin((pan + fov / 2) * d2r);
				arcX1 += 80;
				arcY1 += 80;
				arcX2 += 80;
				arcY2 += 80;
				var radarPathString = 'M80,80 L' + arcX1 + ',' + arcY1 + ' A 80 80 0 0 1 ' + arcX2 + ' ' + arcY2 +' Z';
				radarPath.setAttributeNS(null,'d', radarPathString);
				radarPath.setAttributeNS(null,'fill', '#4fb5c2');
				radarPath.setAttributeNS(null,'fill-opacity', 0.35);
				radarPath.setAttributeNS(null,'stroke', '#4fb5c2');
				radarPath.setAttributeNS(null,'stroke-opacity', 0.8);
				radarPath.setAttributeNS(null,'stroke-width', 1);
				radarPath.setAttributeNS(null,'stroke-linejoin', 'miter');
				radar.radarElement.appendChild(radarPath);
				me._floorplan_el_phone__mapdiv.appendChild(radar.radarElement);
				var radarXPos = activeMarker.radarXPos - 80;
				var radarYPos = activeMarker.radarYPos - 80;
				radar.radarElement.style['position'] = 'absolute';
				radar.radarElement.style['left'] = '' + radarXPos + 'px';
				radar.radarElement.style['top'] = '' + radarYPos + 'px';
				radar.radarElement.style['z-index'] = me._floorplan_el_phone.style['z-index'] + 1;
			} else {
				if (radar.radarElement) {
					me._floorplan_el_phone__mapdiv.removeChild(radar.radarElement);
					radar.radarElement = null;
				}
			}
		}
		me._floorplan_el_phone.ggShowSimpleFloorplan=function(mapDetails) {
			var mapWidth = me._floorplan_el_phone.clientWidth;
			var mapHeight = me._floorplan_el_phone.clientHeight;
			var tmpWidth = mapDetails['width'];
			var tmpHeight = mapDetails['height'];
			var levelLimit = 1000;
			var levels = 1;
			while (levelLimit < mapDetails['width'] || levelLimit < mapDetails['height']) {
				tmpWidth /= 2;
				tmpHeight /= 2;
				levelLimit *= 2;
				levels++;
			}
			var level = 1;
			while (levels > level && ((mapWidth * window.devicePixelRatio) >= 2*tmpWidth || (mapHeight * window.devicePixelRatio) >= 2*tmpHeight)) {
				tmpWidth *= 2;
				tmpHeight *= 2;
				levelLimit *= 2;
				level++;
			}
			var imageFilename = basePath + 'images/maptiles/' + me._floorplan_el_phone.ggMapId + '_' + level + '.' + mapDetails['tileformat'];
			me._floorplan_el_phone__img.setAttribute('src', imageFilename);
			me._floorplan_el_phone__img.setAttribute('loading', 'lazy');
		me._floorplan_el_phone__mapdiv.setAttribute('style','position: absolute; left: 50%; margin-left: -' + me._floorplan_el_phone.ggFloorplanWidth / 2 + 'px; top: 50%; margin-top: -' + me._floorplan_el_phone.ggFloorplanHeight / 2 + 'px;width:' + me._floorplan_el_phone.ggFloorplanWidth + 'px;height:' + me._floorplan_el_phone.ggFloorplanHeight + 'px;overflow:hidden;;');
		var image_rendering_prop = (player.getBrowser() == 2 || player.getBrowser() == 3) ? 'crisp-edges' : 'pixelated';
		me._floorplan_el_phone__img.setAttribute('style','width:' + me._floorplan_el_phone.ggFloorplanWidth + 'px;height:' + me._floorplan_el_phone.ggFloorplanHeight + 'px;-webkit-user-drag:none;pointer-events:none;image-rendering:' + (mapDetails['crispedges'] ? image_rendering_prop : 'auto') + ';');
		}
		me._floorplan_el_phone.ggCalculateFloorplanSize=function(mapDetails) {
			var floorplanWidth = mapDetails['width'];
			var floorplanHeight = mapDetails['height'];
			var frameAR = me._floorplan_el_phone.clientWidth / me._floorplan_el_phone.clientHeight;
			var floorplanAR = floorplanWidth / floorplanHeight;
			if (frameAR > floorplanAR) {
				me._floorplan_el_phone.ggFloorplanHeight = me._floorplan_el_phone.clientHeight;
				me._floorplan_el_phone.ggFloorplanWidth = me._floorplan_el_phone.ggFloorplanHeight * floorplanAR;
			} else {
				me._floorplan_el_phone.ggFloorplanWidth = me._floorplan_el_phone.clientWidth;
				me._floorplan_el_phone.ggFloorplanHeight = me._floorplan_el_phone.ggFloorplanWidth / floorplanAR;
			}
		}
		me._floorplan_el_phone.ggInitMap=function() {
			var mapDetails = player.getMapDetails(me._floorplan_el_phone.ggMapId);
			if (Object.keys(mapDetails).length === 0) return;
			me._floorplan_el_phone.style.backgroundColor = mapDetails['bgcolor'];
			if (mapDetails.hasOwnProperty('transparent') && mapDetails['transparent']) {
				me._floorplan_el_phone.ggPermeableMap = true;
			} else {
				me._floorplan_el_phone.ggPermeableMap = false;
			}
			me._floorplan_el_phone.ggCalculateFloorplanSize(mapDetails);
			me._floorplan_el_phone.ggShowSimpleFloorplan(mapDetails);
			me._floorplan_el_phone.ggFloorplanNorth = mapDetails['floorplannorth'];
			me._floorplan_el_phone.ggMapNotLoaded = false;
		}
		me._floorplan_el_phone.ggClearMap=function() {
			me._floorplan_el_phone.ggClearMapMarkers();
			me._floorplan_el_phone.ggMapNotLoaded = true;
		}
		me._floorplan_el_phone.ggChangeMap=function(mapId) {
			var newMapType = player.getMapType(mapId)
			if (newMapType == 'web') {
				return;
			}
			me._floorplan_el_phone.ggMapId = mapId;
			if (!me._floorplan_el_phone.ggMapNotLoaded) {
				me._floorplan_el_phone.ggClearMap();
				me._floorplan_el_phone.ggInitMap();
				me._floorplan_el_phone.ggInitMapMarkers();
			}
		}
		me._floorplan_el_phone.ggPlaceMarkersOnSimpleFloorplan=function() {
			var markers=me._floorplan_el_phone.ggSimpleFloorplanMarkerArray;
			for (id in markers) {
				if (markers.hasOwnProperty(id)) {
					marker=markers[id];
					var coords = player.getNodeMapCoordsInPercent(id, me._floorplan_el_phone.ggMapId);
					var xPos = (me._floorplan_el_phone.ggFloorplanWidth * coords[0]) / 100.0;
					var yPos = (me._floorplan_el_phone.ggFloorplanHeight * coords[1]) / 100.0;
					marker.radarXPos = xPos;
					marker.radarYPos = yPos;
					xPos -= me._floorplan_el_phone.ggHMarkerAnchorOffset;
					yPos -= me._floorplan_el_phone.ggVMarkerAnchorOffset;
					marker.style['position'] = 'absolute';
					marker.style['left'] = xPos + 'px';
					marker.style['top'] = yPos + 'px';
					marker.style['z-index'] = me._floorplan_el_phone.style['z-index'] + 2;
				}
			}
		}
		me._floorplan_el_phone.ggInitMapMarkers=function() {
			me._floorplan_el_phone.ggClearMapMarkers();
			var ids=player.getNodeIds();
			me._floorplan_el_phone.ggFilteredIds = [];
			if (me._floorplan_el_phone.ggFilter != '') {
				var filter = me._floorplan_el_phone.ggFilter.split(',');
				for (i=0; i < ids.length; i++) {
					var nodeId = ids[i];
					var nodeData = player.getNodeUserdata(nodeId);
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) != -1) me._floorplan_el_phone.ggFilteredIds.push(nodeId);
					}
				}
				if (me._floorplan_el_phone.ggFilteredIds.length > 0) ids = me._floorplan_el_phone.ggFilteredIds;
			}
			for(var i=0; i < ids.length; i++) {
				var id = ids[i];
				var coords = player.getNodeMapCoordsInPercent(id, me._floorplan_el_phone.ggMapId);
				if (coords.length>=2) {
					me._floorplan_el_phone.ggHMarkerAnchorOffset = 15;
					me._floorplan_el_phone.ggVMarkerAnchorOffset = 15;
					var markerParent = new Object();
					markerParent.ggElementNodeId=function() { return id };
					var markerClass = new SkinElement_map_pin_Class(me, markerParent);
					me._floorplan_el_phone.ggMarkerInstances.push(markerClass);
					var marker = markerClass._map_pin;
					me._floorplan_el_phone.ggSimpleFloorplanMarkerArray[id] = marker;
					me._floorplan_el_phone__mapdiv.appendChild(marker);
				}
			}
			me._floorplan_el_phone.ggPlaceMarkersOnSimpleFloorplan();
			skin.updateSize(me._floorplan_el_phone);
		}
		me._floorplan_el_phone.ggClearMapMarkers=function() {
			for (id in me._floorplan_el_phone.ggSimpleFloorplanMarkerArray) {
				if (me._floorplan_el_phone.ggSimpleFloorplanMarkerArray.hasOwnProperty(id)) {
					me._floorplan_el_phone__mapdiv.removeChild(me._floorplan_el_phone.ggSimpleFloorplanMarkerArray[id]);
				}
			}
			me._floorplan_el_phone.ggMarkerInstances=[];
			me._floorplan_el_phone.ggSimpleFloorplanMarkerArray=[];
		}
		me._floorplan_el_phone.logicBlock_visible();
		el = me._map_code;
		;
		player.addListener('changenode', function(event) {
			me._variable_vis_sounds_splashscreen.logicBlock();
			me._variable_vis_skin.logicBlock();
			me._variable_vis_controls_left.logicBlock();
			me._variable_vis_video_hs_popup.logicBlock();
			me._variable_opt_share.logicBlock();
			me._map_toggle.logicBlock_alpha();
			me._map.logicBlock_alpha();
			me._map_el.logicBlock_position();
			me._map_el.logicBlock_size();
			me._map_el.logicBlock_visible();
			me._floorplan_el.logicBlock_position();
			me._floorplan_el.logicBlock_size();
			me._floorplan_el.logicBlock_visible();
			var mapDetails = player.getMapDetails(me._floorplan_el.ggMapId);
			if (mapDetails.hasOwnProperty('title')) {
				me._floorplan_el.ggCalculateFloorplanSize(mapDetails);
				me._floorplan_el.ggShowSimpleFloorplan(mapDetails);
				me._floorplan_el.ggPlaceMarkersOnSimpleFloorplan();
			}
			if (me._floorplan_el.ggRadar) me._floorplan_el.ggRadar.update();
			if (me._floorplan_el.ggLastNodeId) {
				var lastActiveMarker = me._floorplan_el.ggSimpleFloorplanMarkerArray[me._floorplan_el.ggLastNodeId];
				if (lastActiveMarker && lastActiveMarker.ggDeactivate) lastActiveMarker.ggDeactivate();
			}
			var id = player.getCurrentNode();
			var marker = me._floorplan_el.ggSimpleFloorplanMarkerArray[id];
			if (marker) {
				if (marker.ggActivate) marker.ggActivate();
			}
			if (player.getMapType(me._floorplan_el.ggMapId) == 'file') {
				var coords = player.getNodeMapCoords(id, me._floorplan_el.ggMapId);
				if (coords.length < 2) {
					var mapId = player.getMapContainingNode(id);
					if (mapId != '') {
							me._floorplan_el.ggChangeMap(mapId);
					}
				}
			}
			me._floorplan_el.ggLastNodeId = id;
			me._floorplan_el.ggRadar.update();
			me._map_node_description.logicBlock_visible();
			me._map_phone.logicBlock_alpha();
			me._map_el_phone.logicBlock_visible();
			me._floorplan_el_phone.logicBlock_visible();
			var mapDetails = player.getMapDetails(me._floorplan_el_phone.ggMapId);
			if (mapDetails.hasOwnProperty('title')) {
				me._floorplan_el_phone.ggCalculateFloorplanSize(mapDetails);
				me._floorplan_el_phone.ggShowSimpleFloorplan(mapDetails);
				me._floorplan_el_phone.ggPlaceMarkersOnSimpleFloorplan();
			}
			if (me._floorplan_el_phone.ggRadar) me._floorplan_el_phone.ggRadar.update();
			if (me._floorplan_el_phone.ggLastNodeId) {
				var lastActiveMarker = me._floorplan_el_phone.ggSimpleFloorplanMarkerArray[me._floorplan_el_phone.ggLastNodeId];
				if (lastActiveMarker && lastActiveMarker.ggDeactivate) lastActiveMarker.ggDeactivate();
			}
			var id = player.getCurrentNode();
			var marker = me._floorplan_el_phone.ggSimpleFloorplanMarkerArray[id];
			if (marker) {
				if (marker.ggActivate) marker.ggActivate();
			}
			if (player.getMapType(me._floorplan_el_phone.ggMapId) == 'file') {
				var coords = player.getNodeMapCoords(id, me._floorplan_el_phone.ggMapId);
				if (coords.length < 2) {
					var mapId = player.getMapContainingNode(id);
					if (mapId != '') {
							me._floorplan_el_phone.ggChangeMap(mapId);
					}
				}
			}
			me._floorplan_el_phone.ggLastNodeId = id;
			me._floorplan_el_phone.ggRadar.update();
		});
		player.addListener('configloaded', function(event) {
			me._variable_vis_sounds_splashscreen.logicBlock();
			me._variable_vis_skin.logicBlock();
			me._variable_vis_controls_left.logicBlock();
			me._variable_vis_video_hs_popup.logicBlock();
			me._variable_opt_maps.logicBlock();
			me._variable_opt_floorplans.logicBlock();
			me._variable_opt_share.logicBlock();
			me._variable_has_fullscreen.logicBlock();
			me._map_toggle.logicBlock_visible();
			me._map_toggle.logicBlock_alpha();
			me._map_icon.logicBlock_visible();
			me._map_icon_active.logicBlock_visible();
			me._floorplan_icon.logicBlock_visible();
			me._floorplan_icon_active.logicBlock_visible();
			me._map.logicBlock_alpha();
			me._map_el.logicBlock_position();
			me._map_el.logicBlock_size();
			me._map_el.logicBlock_visible();
			me._floorplan_el.logicBlock_position();
			me._floorplan_el.logicBlock_size();
			me._floorplan_el.logicBlock_visible();
			if (me._floorplan_el.ggVisible) {
				me._floorplan_el.ggClearMap();
				me._floorplan_el.ggInitMap(false);
				me._floorplan_el.ggInitMapMarkers(true);
			}
			me._map_node_description.logicBlock_visible();
			me._map_phone.logicBlock_alpha();
			me._map_el_phone.logicBlock_visible();
			me._floorplan_el_phone.logicBlock_visible();
			if (me._floorplan_el_phone.ggVisible) {
				me._floorplan_el_phone.ggClearMap();
				me._floorplan_el_phone.ggInitMap(false);
				me._floorplan_el_phone.ggInitMapMarkers(true);
			}
		});
		player.addListener('positionchanged', function(event) {
			me._floorplan_el.ggRadar.update();
			me._floorplan_el_phone.ggRadar.update();
		});
		player.addListener('sizechanged', function(event) {
			me._variable_resp_desktop.logicBlock();
			me._variable_resp_tablet.logicBlock();
			me._variable_resp_phone.logicBlock();
			me._variable_resp_phone_1.logicBlock();
		});
		player.addListener('soundspermittedchanged', function(event) {
			me._variable_vis_sounds_splashscreen.logicBlock();
		});
		player.addListener('varchanged_opt_desc_in_maps', function(event) {
			me._map_el.logicBlock_position();
			me._map_el.logicBlock_size();
			me._floorplan_el.logicBlock_position();
			me._floorplan_el.logicBlock_size();
			me._map_node_description.logicBlock_visible();
		});
		player.addListener('varchanged_opt_share_copy', function(event) {
			me._variable_opt_share.logicBlock();
		});
		player.addListener('varchanged_opt_share_facebook', function(event) {
			me._variable_opt_share.logicBlock();
		});
		player.addListener('varchanged_opt_share_twitter', function(event) {
			me._variable_opt_share.logicBlock();
		});
		player.addListener('varchanged_resp_phone', function(event) {
			me._variable_vis_controls_left.logicBlock();
		});
		player.addListener('varchanged_resp_phone_1', function(event) {
			me._map_toggle.logicBlock_alpha();
			me._map_phone.logicBlock_alpha();
		});
		player.addListener('varchanged_sounds_splashscreen_accepted', function(event) {
			me._variable_vis_sounds_splashscreen.logicBlock();
		});
		player.addListener('varchanged_vis_floorplan_1', function(event) {
			me._map_toggle.logicBlock_alpha();
			me._map.logicBlock_alpha();
			me._floorplan_el.logicBlock_visible();
			me._map_phone.logicBlock_alpha();
			me._floorplan_el_phone.logicBlock_visible();
		});
		player.addListener('varchanged_vis_map_1', function(event) {
			me._map_toggle.logicBlock_alpha();
			me._map.logicBlock_alpha();
			me._map_el.logicBlock_visible();
			me._map_phone.logicBlock_alpha();
			me._map_el_phone.logicBlock_visible();
		});
		player.addListener('varchanged_vis_sounds_splashscreen', function(event) {
			me._variable_vis_skin.logicBlock();
		});
		player.addListener('varchanged_vis_video_file_hs_popup', function(event) {
			me._variable_vis_video_hs_popup.logicBlock();
		});
		player.addListener('varchanged_vis_video_url_hs_popup', function(event) {
			me._variable_vis_video_hs_popup.logicBlock();
		});
		player.addListener('varchanged_vis_video_vimeo_hs_popup', function(event) {
			me._variable_vis_video_hs_popup.logicBlock();
		});
		player.addListener('varchanged_vis_video_youtube_hs_popup', function(event) {
			me._variable_vis_video_hs_popup.logicBlock();
		});
	};
	function SkinElement_map_pin_Class(parentScope,ggParent) {
		var me=this;
		var flag=false;
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		var nodeId=ggParent.ggElementNodeId();
		me.ggNodeId=nodeId;
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.ggUserdata.nodeid=nodeId;
		me.elementMouseDown={};
		me.elementMouseOver={};
		
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		
		el=me._map_pin=document.createElement('div');
		el.ggId="map_pin";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #4fb5c2;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 15px;';
		hs+='cursor : pointer;';
		hs+='height : 30px;';
		hs+='left : calc(50% - ((30px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((30px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._map_pin.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		me._map_pin.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['map_pin'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._map_pin.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._map_pin.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._map_pin.style.transition='transform 200ms ease 0ms';
				if (me._map_pin.ggCurrentLogicStateScaling == 0) {
					me._map_pin.ggParameter.sx = 1.3;
					me._map_pin.ggParameter.sy = 1.3;
					me._map_pin.style.transform=parameterToTransform(me._map_pin.ggParameter);
					setTimeout(function() {skin.updateSize(me._map_pin);}, 250);
				}
				else {
					me._map_pin.ggParameter.sx = 1;
					me._map_pin.ggParameter.sy = 1;
					me._map_pin.style.transform=parameterToTransform(me._map_pin.ggParameter);
					setTimeout(function() {skin.updateSize(me._map_pin);}, 250);
				}
			}
		}
		me._map_pin.logicBlock_scaling();
		me._map_pin.onclick=function (e) {
			player.openNext("{"+me.ggNodeId+"}","");
			if (
				(
					((player.getVariableValue('resp_phone_1') == true))
				)
			) {
				player.setVariableValue('vis_floorplan_1', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone_1') == true))
				)
			) {
				player.setVariableValue('vis_map_1', false);
			}
		}
		me._map_pin.onmouseenter=function (e) {
				skin._map_node_title.ggUpdateText=function() {
					var params = [];
					params.push(String(player._(me.ggUserdata.title)));
					var hs = player._("%1", params);
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			skin._map_node_title.ggUpdateText();
			skin._map_node_title.ggTextDiv.scrollTop = 0;
				skin._map_node_description.ggUpdateText=function() {
					var params = [];
					params.push(String(player._(me.ggUserdata.description)));
					var hs = player._("%1", params);
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			skin._map_node_description.ggUpdateText();
			skin._map_node_description.ggTextDiv.scrollTop = 0;
			me.elementMouseOver['map_pin']=true;
			me._map_pin_icon.logicBlock_visible();
			me._map_pin_icon_active.logicBlock_visible();
			me._map_pin.logicBlock_scaling();
		}
		me._map_pin.onmouseleave=function (e) {
			skin._reset_info.onclick.call(skin._reset_info);
			me.elementMouseOver['map_pin']=false;
			me._map_pin_icon.logicBlock_visible();
			me._map_pin_icon_active.logicBlock_visible();
			me._map_pin.logicBlock_scaling();
		}
		me._map_pin.ggUpdatePosition=function (useTransition) {
		}
		el=me._map_pin_icon=document.createElement('div');
		els=me._map_pin_icon__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBzdHJva2UtbGluZWpvaW49InJvdW5kIiBoZWlnaHQ9IjMyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2Utd2lkdGg9IjEiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgd2lkdGg9IjMyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIGNsYXNzPSJmZWF0aGVyIGZlYXRoZXItbWFwLXBpbiI+CiA8cGF0aCBkPSJNMjEgMTBjMCA3LTkgMTMtOSAxM3MtOS02LTktMTNhOSA5IDAgMCAxIDE4IDB6Ii8+CiA8Y2lyY2xlIGN5PSIxMCIgY3g9IjEyIiByPSIzIi8+Cjwvc3ZnPgo=';
		me._map_pin_icon__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="map_pin_icon";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((20px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((20px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._map_pin_icon.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._map_pin_icon.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['map_pin'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._map_pin_icon.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._map_pin_icon.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._map_pin_icon.style.transition='';
				if (me._map_pin_icon.ggCurrentLogicStateVisible == 0) {
					me._map_pin_icon.style.visibility="hidden";
					me._map_pin_icon.ggVisible=false;
				}
				else {
					me._map_pin_icon.style.visibility=(Number(me._map_pin_icon.style.opacity)>0||!me._map_pin_icon.style.opacity)?'inherit':'hidden';
					me._map_pin_icon.ggVisible=true;
				}
			}
		}
		me._map_pin_icon.logicBlock_visible();
		me._map_pin_icon.ggUpdatePosition=function (useTransition) {
		}
		me._map_pin.appendChild(me._map_pin_icon);
		el=me._map_pin_icon_active=document.createElement('div');
		els=me._map_pin_icon_active__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeT0iMHB4IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAzMiAzMjsiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDMyIDMyIiBpZD0iTGF5ZX'+
			'JfMSI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTtzdHJva2U6I0ZGRkZGRjtzdHJva2Utd2lkdGg6MS4zMzMzO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDo1LjMzMzM7fSYjeGQ7Cjwvc3R5bGU+CiA8cGF0aCBkPSJNMjgsMTMuM2MwLDkuMy0xMiwxNy4zLTEyLDE3LjNzLTEyLTgtMTItMTcuM2MwLTYuNiw1LjQtMTIsMTItMTJTMjgsNi43LDI4LDEzLjN6IiBjbGFzcz0ic3QwIi8+CiA8Y2lyY2xlIGN5PSIxMy4zIiBjeD0iMTYiIGNsYXNzPSJzdDAiIHI9IjQiLz4KPC9zdmc+Cg==';
		me._map_pin_icon_active__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="map_pin_icon_active";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((20px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((20px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._map_pin_icon_active.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._map_pin_icon_active.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['map_pin'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._map_pin_icon_active.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._map_pin_icon_active.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._map_pin_icon_active.style.transition='';
				if (me._map_pin_icon_active.ggCurrentLogicStateVisible == 0) {
					me._map_pin_icon_active.style.visibility=(Number(me._map_pin_icon_active.style.opacity)>0||!me._map_pin_icon_active.style.opacity)?'inherit':'hidden';
					me._map_pin_icon_active.ggVisible=true;
				}
				else {
					me._map_pin_icon_active.style.visibility="hidden";
					me._map_pin_icon_active.ggVisible=false;
				}
			}
		}
		me._map_pin_icon_active.logicBlock_visible();
		me._map_pin_icon_active.ggUpdatePosition=function (useTransition) {
		}
		me._map_pin.appendChild(me._map_pin_icon_active);
		me._map_pin.logicBlock_scaling();
		me.elementMouseOver['map_pin']=false;
		me._map_pin_icon.logicBlock_visible();
		me._map_pin_icon_active.logicBlock_visible();
	};
	player.addListener('changenode', function() {
		me.ggUserdata=player.userdata;
	});
	me.skinTimerEvent=function() {
		if (player.isInVR()) return;
		me.ggCurrentTime=new Date().getTime();
	};
	player.addListener('timer', me.skinTimerEvent);
	me.addSkin();
	var style = document.createElement('style');
	style.type = 'text/css';
	hs='.ggskin { font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 14px; line-height: normal; -webkit-text-size-adjust: 100%; } .ggmarkdown p { margin-top: 0px; } .ggmarkdown a { color: #999; } .ggdefaulthotspot { font-family: "Open Sans"; font-size: 15px; -webkit-filter: drop-shadow( 0px 0px 3px rgba(0, 0, 0, 0.7)); filter: drop-shadow( 0px 0px 3px rgba(0, 0, 0, 0.7)); } .ggmarkdown h1:first-child, .ggmarkdown h2:first-child, .ggmarkdown h3:first-child, .ggmarkdown h4:first-child { margin-top: 0px; } .ggmarkdown h1,.ggmarkdown h2,.ggmarkdown h3,.ggmarkdown h4 { margin-top: 1em; margin-bottom: 0.2em; } .ggmarkdown { white-space: normal; } .open_sans { font-family: "Open Sans"; } .ggskin_text>div::-webkit-scrollbar { width: 4px; } .ggskin_text>div { scrollbar-width: thin; }@font-face { font-family: "Montserrat"; font-style: normal; font-weight: 400; src: local(""), url("$(skinbase)fonts/montserrat-latin-regular.woff2") format("woff2"); } .montserrat_regular { font-family: "Montserrat", sans-serif; font-weight: 400; }';
	hs = hs.replace(/\$\(skinbase\)/g,basePath);
	style.appendChild(document.createTextNode(hs));
	document.head.appendChild(style);
	document.addEventListener('keyup', function(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			let activeElement = document.activeElement;
			if (activeElement.classList.contains('ggskin') && activeElement.onclick) activeElement.onclick();
		}
	});
	document.addEventListener('keydown', function(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			let activeElement = document.activeElement;
			if (activeElement.classList.contains('ggskin') && activeElement.onmousedown) activeElement.onmousedown();
		}
	});
	document.addEventListener('keyup', function(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			let activeElement = document.activeElement;
			if (activeElement.classList.contains('ggskin') && activeElement.onmouseup) activeElement.onmouseup();
		}
	});
	me.skinTimerEvent();
	document.fonts.onloadingdone = () => {
		me.updateSize(me.divSkin);
	}
};