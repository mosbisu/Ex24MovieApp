import React,{Component} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import InputComponent from '../components/InputComponent';
import TabComponent from '../components/TabComponent';

export default class SignUp extends Component{

    state={
        tabs:["전화번호", "이메일"],
        tabIndex: 0, //현재 선택된 탭 번호
    }

    render(){
        return (
            <View style={styles.root}>
                {/* 1. 본문영역 */}
                <View style={styles.content}>
                    {/* 1.1 전화번호와 이메일 입력 가능한 탭으로 구성 */}
                    <View style={styles.tabContainer}>
                        {/* 탭이 여러개 일수도 있음 */}
                        {
                            this.state.tabs.map( (value, index)=>{
                                return <TabComponent onPress={()=>{this.setTabIndex(index)}} selected={ this.state.tabIndex === index } label={value} key={"Tab"+index}></TabComponent>
                            } )
                        }                        
                    </View>

                    {/* 1.2 정보 입력창 */}
                    <InputComponent placeholder={this.state.tabs[this.state.tabIndex]}></InputComponent>

                    {/* 1.2.1 이메일 선택일때 입력창 1개 더 추가 */}
                    {
                        //if(this.state.tabIndex===1){}

                        // if문의 역할을 하는 연산자 &&
                        this.state.tabIndex===1 && <InputComponent placeholder="비밀번호" secureTextEntry={true}></InputComponent>
                    }

                    {/* 전화번호일때 [다음] 버튼 */}
                    {
                        this.state.tabIndex===0 && <View style={{width:'100%', margin:16}}><Button title="다음" onPress={()=>this.setTabIndex(1)}></Button></View>
                    }

                    {/* 이메일일때는 [완료] 버튼 */}
                    {
                        this.state.tabIndex===1 && <View style={{width:'100%', margin:16}}><Button title="완료" onPress={()=>this.props.navigation.goBack()}></Button></View>
                    }

                    {/* 전화번호 탭일때 안내메세지 */}
                    {
                        this.state.tabIndex===0 && <Text style={styles.telMessage}>Movie App의 업데이트 내용을 SMS로 수신할 수 있으며, 언제든지 수신을 취소할 수 있습니다.</Text>
                    }


                </View>

                {/* 2. Footer영역 */}
                <View style={styles.footer}>
                    <Text style={styles.footerMsg}>
                        이미 계정이 있으신가요? <Text onPress={()=>this.props.navigation.goBack()} style={styles.goBack}>로그인</Text>
                    </Text>
                </View>
            </View>
        );
    }

    //Tab번호 변경 메소드
    setTabIndex= (index)=>{
        this.setState({tabIndex:index});
    }

}

const styles= StyleSheet.create({
    root:{flex:1, backgroundColor:'#FEFFFF'},
    content:{
        flex:1,
        width:'100%',
        alignItems:'center',
        padding:32
    },
    footer:{
        borderTopWidth:1,
        borderTopColor:'#D3D3D3',
        padding:8
    },
    ///
    footerMsg:{
        color:'#929292',
        textAlign:'center'
    },
    goBack:{
        color:'#3796FE'
    },
    tabContainer:{
        flexDirection:'row',
        marginBottom:16
    },
    telMessage:{
        textAlign:'center',
        fontSize:12,
        color:'#929292',
        marginLeft:8,
        marginRight:8
    }
});