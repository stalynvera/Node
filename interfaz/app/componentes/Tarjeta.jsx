const people = [
    {
      name: 'Dennis Chuqui',
      role: 'ESPANA',
      imageUrl:
        'data:image/jpeg;base64,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',
    },
    {
        name: 'Stalyn Soledispa',
        role: 'ECUADOR',
        imageUrl:
          'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxQTEhUSERIVFRUXGBkaGBgYFxcWGhsZGhcXGBofGBgaHiggHxolIhodIzEhJykrLjEuHx8zODMsNygtLisBCgoKDg0OFxAPGC0mHSUtLS0tLS0tLi0tKy0tLS0rLS8tLS0tLS0tLS0tLS0rNS0tLS0tLS0tLS0vLS0tLS0tLf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABQYDBAcCAQj/xABKEAACAQIDBQQFCQMKBQUBAAABAgMAEQQSIQUTMUFRBiJhcQcygZGhFDNCUmJygrHBI3OyJDVDU3SSorPR8BU0Y8Lhk6O08fIl/8QAGAEBAQEBAQAAAAAAAAAAAAAAAAECAwT/xAAjEQEBAAICAgIBBQAAAAAAAAAAAQIRITESQQNRYRMicaHh/9oADAMBAAIRAxEAPwDuNKUoFKUoFKUoFKUoFKUoFKVo7S2vFBbeP3m9VFBeRj9iNQWPsFBvUqJTF4iT1IhCp5ykM/8A6aGw9reyvTYAnWWeRhx0IjUf3bG3toJO9fb1X2w2GzZkw+/b62Uyf45NPdXiVUuM+FMA+jKgUFCfFeA63060FjpVbw+2543aKeEyFBmzw6l4zwcRHU63BVcxB4AggmewmLSVQ8bB1N7EG40NiPMEEEciDQZqUpQKUpQKUpQKUpQKUpQKUpQKUpQKUpQKUpQKUpQK8ySBQWYgAaknQAeJr5NKFUsxAUAkkmwAGpJPSqRPiZdpS7tLx4YEG9u8y/XYHhmPqKeXePJaDf8A+OzYxzHgBkhBtJinXTygQ6s32jZefe0vN7P2ckVyt2c+tIxzO3m3TwGnhWbCYZI0WONQqqLAD/ep8a0MTi3lcwwG1vnJOS/ZXq35VRuviO9kQZmHHov3j+nGtbaWNhhAbESKLnug8z0VBqT76rfbXtWMAiYbBxb7Fy2EcfG2Y2zyHqTwHPyBrc7LdmGjIxOOff4xtSx1SL7EI4ADm3E+VgIJVcTPKAYo1iQ8GluX8LRDh+IjyrWxWJljIAmimb6URUIWHMK17BugPHw41KuGfS5VOo9ZvLoPifCq/wBp9pDDbuDDwpJNIdFIuLDiWIBP68Ko9YrEDJFiYuET21uCEY5XRhxDKdLeArLBiJExWKMaq0SmNmXRWLNGtyrHu3sF0a1+oqtSbTbvq6NGWtHPG3FXPzUg6g2y5uYy31Bqaj2ipzKgUu7Z3ZwWVO6qqCq6swVRpoL86qLNs/aEcy5o2uAbHQgg9GU6g+BFbVVSbDTKyzpi42kA+bZBCkgt6rMLsPA2a3Q1Ydn45ZVJAKsDZka2ZW42axI8bgkEagkVlW1SlKBSlKBSlKBSlKBSlKBSlKBSlKBSlKBSlaO2cYYoiyC8hssY5F2Nlv4X1PgDQQ3aTFbwmIDNGjKrLylmaxSPxQXDN7B1qS2NgxEhUHMbku313+kfIcAOQFQ2BgCMcpzrhhu0J1MmJk1ldvG7W8y9WCNQigX0Uak+HEn4mqMW0p20ii0kfn9RfpOfLgB1qM7Q7Wj2bhC6rma4SJL6yStwuen0mPIA+VSmBW95SO9JbTog9Ufr5muUdscU+0NqLhoj3Y23Cc7O2s8nmqgj2HrQT3oz2E0jvtPFHeSuSI2PXg7gch9BRyUHXvGujVr4XDrFGkUYsqKFUdABYVnFQeqhdjxiTEYnEEah9yh6KgBa3mxP92pd5LAseQJ9wvUbsYZMKrc2DOfvSEt+tBAbagL4pHWLeKsTvIq+uQ0oEZUHRguUnLcHXToZvZiZ0EmHxAKcLbsAAjQqyixBHAg6ioraEs8eKeTDokixQQpIrNlY3aR+6TpexHtrZSYSfyvBgl/6RBYGULo6Op0Ey8ifAcDVE9JCHXLKqt8R7L6ioHFwHBuMQl2iGkg4kJ+oX1h4ZhzFSuH2gHRZB3o2Fwyg3H3kOoI4Hob6Vmfvr3SCCNOanwPgeFBug31FfahOyxCo+HBP7Fsqg8QhF1U9cuq38BU3UClKUClKUClKUClKUClKUClKUClKUCqxtvaH7ZmAzDDKMo+tiZRaNePJTc/fHSrDi8QsaNI3BQSf/HjVTw0eadIm9ZL4qfUn9rMSsa35hQGsOiJQSOy8Ju9zATmMSl5G+tK5N2/ExZqz7Ye4SIH51wp+7e7fAWrW2W+YPL9dzb7q91fyvWPENfEw/ZLe/ds36ir7Rvbf2h8nw809vm0ZlHVrWQe1iBXNvQ/g82JnmfvNGtrn68jd4+ZsffUx6VdqEQwYcH5xy7dSsYuPZmK+6tH0VSbvBY6YcQz6+CRFh8TUV0PZcpdN4fpksPu3svwArbzVrbOssca8gi/witnMAT0tQaO35SuGmI45CB5nQfnWZh81H5EjwQD9bVG9qp/5MQPpSQD2GVL/AArfGKUNLMfVQFR5ICze8m3sqiOweZ3xDrCr3nIDObLaNEjFhrc3VvjUbtLEPhMXHiXjVIZysU5VrrvNBDIRpZv6MmxJBT6tbGwIpY4UaRCCQXOZ2bLnYuRlUADj4nxrJ2hh+U4WaF1OWRCFdCGCvxQ3GoINuVBKQYfdSnLokpLW5CX6VumfifEE868bSLQXmisVGssfUc2Xow59RUJ2W2o2P2bG5a02XIzDiJ4jbML8yQD7anMBizIgZrZrC/Q3HEDoenW4oNPAYpTjgyEFZ4L+2Nvzs/wqzVz3BoItoxQg+q7ZR/03hdgPYVI9ldCFKFKUqBSlKBSlKBSlKBSlKBSlKBSlVzaewZXJHyyQxHjE4GXyLpldl+ySQed6DX23tuI3ka7QQMTpc76ZdAqD6SqeJ4ZrAag1Xdi4549mYraEwtPiGmlbwsTBEo8FVBaoXtnjlw5dml3ggsqKFREbEhc0caDU2iBDkCwBKDiNJftuRBgMJhOO8bDwa8Tcore06mqi5bOw+7ijj5qig+JsL/Go7ETWZX6viLexco/Kpw+t7f1qqbR0gwrdZWv+IuTSCl+lHG32kkXKOC1+ha7N8AtbHYee2zNqpzVJXHkYW/0qsdtsVn2xiD1kdB+CFR+YNbfYXaAXEz4ZvVxWHkj8M27cr79RRXZ8BNmVCPpQxsPh/rW0x0Pkap3o72vvsJhGJ7wRoH+8ozC/901cKUQHaua2FjI/rYbf3rj8q28ZGVgjgv3pXRD45iXk/wAIb4Vo7RYNFgw/q/KUDfgz/qBW7smQzYppPowrYfvJbE/3UCj8VLxCdrAVqp7cwrYV/lEbOsRPeKHWInnY6NETybhyIHC215dAwIYAgixB1BB4g1wl1Xazcc49Hk5ixu0MIStjIMTHkuFyyjMcoOoGvDkQRyq5YPRpV+q9x91xnt5BiwrmkSNgtuQIx7sgaL8BJ3d+tswAPh4V0xhacdHjIPmjXHwY13cULtzCf/0Nn4gG2WR438Q0MuQH2n41eV4VSe1JtCJeJhkR/wAULhx7wpHtq6QsCoINwRcHqOVKPdKUqBSlKBSlKBSlKBSlKBSlKD4arfaTaMoYQYaN3lYXZgCEiXhdpD3c3RdTztYVZarHbPtdBgo++waVgckQN2Y9T9VerH86DlPb+FYf2LMHkVMxtfLElyVRB9Z2u7Me8xtfQqKlvSNjN5tTZEQPdzpL73XL+RqiYraDYmd3kYMzXaQjqe6oHgBwHQCt7/i4mx2y5GJJijwsT35OmIeMnyZcr+TCqO/B+9/vrVd2nD/IgecUlz4ASsp+BqZMv7Zk+yp97OP0rDAquZ4G4Fjf7sq3v7CT7qRHGMFsp8ZidpNHGJJUeeWK7WIdcSSAthqWVSltONVzF4nI0OIjOisCD0BOZT7CLe+pbYuM2hgpsUcOitNHvjiM2XQJKSWUMRcak6cqrUWLzK5kB3Tse/pYMxuQQOAvrWd8ukxtnC79gNr7uZoT3c7byMX0zrqyjzXUeRrt0MoYBhwIBHtr8t4CdgchNpEN0YdVNwQfCu9ejjtCMVh7EgSR+uvQ8/ZzHgfCtemGDti+SB9Cd1iUcAcSHI4e24qW2DiZIohFFhpJZCS8j6JHvGNyMzWuFFluByqO7exEKXAvdL+bRMHArZ7b7bEMKyMrS7wLkiEm7Q3HFyO8RrwF+XW1ZzupGsMd3tNnE4znDh18DM1/4aypisR9KCM/cmB/iUVw2X0h40My4aPDrkvmAw9svmXa+lZti9sdrnCmWARmBM15pMga98zEjNckFuluFc9W+nSzU3vhcfTRgGOHgxyqUlgcC1wTZtV1HRwPjVq2pjc0MGKi170UgHVJVsw9ze+1c6OL2lidjTTYjLucuZMylppmzhs3EBE6acOAqzdmcbn2GkgNzFHof3MgYfACumDnlOVnlCOXjbvRyoGHiLWPwymsGxNuJhkGHxkix5BaOZzljkjHq3kPdEgFgVJB5i96idtTmFSy6jDyMbD+ocE6dcqsDb7NaibcWUhImZ2a1kUEm/UkaBftHQV01wxtdMJt5ZsQIsPaRAheSUG6DXKiq30mY3NxcAKdb1M1C9ncDuUIYhpGOZyDcXtYAeAAt8edTVYUpSlApSlApSlApSlApSlBpbW2bHOm7kzAcijtGw0I0dCCONc42z6JsIcxjxGIjJNz3g9/NnBY++uoSreo7E4EtQfnrbmwY8JifksTOwcQjM1sxMjulxYAWH6Vp7aXdY3FSHgkgI8BC6Wt7qvXpR2MyYnB4oLdRLFHIeg3oZD8WHtFVDttFabGg/1kn+LK360HZ3xQONJB0bCwv7N+9/4q+bZxJgxMUtu7IpRh1K6287XI8qo3Zrbe9k2cCTmkwM8LfvImBHt7p99X7tLhhiMGbGxskisNCp0IIPhete0Q+1NklMeuNw7R7rFR7mdHBKykgBNR6rMt1v1AFrmq3h+wjucgw27i4BHmvZehyoe941l7Kdsopt7gsToczRyR8L5Wy54jyNxfKDcHUV0HY+0DcQTPne145OAnQfS003g+kvt4GufyY3uO/wAPy+PEV3FejHBPE6JEYGYAqyMWyOvBlDdeBHMVUOzGysTs/aBhmQJJKtoJbndSOpuFzC/dkUspVtVOUgG167TavEuGWQZHUML3sRcXHA+Y61iZ32mWE9K/tFlxOGzqCCpN1a2ZGGkiN9of6HnWPsngopIYpnQPLEphGY3CbsldByYgA346ipPH4BkczwC7EWli4CZRoLX0EwHBuY7rcisL2bxCxYt4kN4cSDJEbEESx92VGB9V8uXQ63Rq3bvHhicXlXdudiW38ksMCqJGzkLKRdiNb3S2XwqR2Z2Ud8PDhmiWHBhi8sOYl5HJzEs40yg/QGhFtdLVf7V5dgASxAA1JJsABxJPSuO69OWdskvU/pD9pI1aAQWsGDAAaAKkbH3cK596HcRvtk4qH6m8A/FBf8xUl2w7Rk5RGjt8oBWOwtaBCC7an+k0N7aLl5moj0ByLbHRrfKJARcBTY5gLrcgaDhc13xmpp5sueU3j8fIphdUZ88QV1UXIKqp0t1DfAVi2LhJicuGhkwyE3JcoqAniVj1Ynw7o8ajtnzSCGJHAWZFSSE37knd9QMeZUlSDqL+2uh7EYSIsiaqwBH+h6EcxXTKsRK7JwxRFDMWIHrG1z4m1SNeIhpXusKUpSgUpSgUpSgUpSgUpSgV8NfaUFf7Q7LSeN4pRdHFj1HQg8iON64N24hPyzGw3uboNeeaCLU+fGv0niIriuDelDAbrakclu7iFjv4tG4Q3/CV+NBUtm7UOHxOEl+hFKJL9FkyiQe0a++u/bGkEkc8HON2j/C650+DCvzrj4+4UPFRIp/AxH6V1P0a9os86hmH8ow0d/30JMb+8ZPfVgrnZGEJ2hZXUFJnljZSAQc8Jk4eYrruJ7KJYiCV4QTcLpIit9ZFbVWHIqwrlfaJhhO0EcrHKm+w8hJ0ASQGJifAa3ruviOB4H/SuedsvDeMlnLUwEcioFmkWRxxdU3ebxK3Nj1sbVtxtY3pWlidqQRkiSVEI45jb41z3zt0mNvEbbG5qE272dWciSNzBOrq6yKMwLKdM6XGa40vcGxIvW8NsQcpkPkb1vCkv0XH7j4PGvkkKsMrAMOYIuNOte6r23Nqhy2FhNzwmYcEBF8t/wCsYcuQNzxFWTbNulP2nstsdinxRmKQ/Nwoq67uMkCQOTYZzmYDL6pWo70ZCLD43a6Qi0UUakAsW1RXzd43PG9WLtZtuLAYYuxG8K/sk6m2hI+qP/FUb0NIzQ42Vrk4iSOK54tmYtIfPLmNdo5On7KwIWKON1BARVII00UDhVh2TsuGLMYYwmY3YC9r9bcAfGs0GGBFbEUVqDLSlKBSlKBSlKBSlKBSlKBSlKBSlKD41c59K+wTPhi8YvLAd7H5rqR7RcV0etDaGHuKD8v7ZAXGToGDKzO6nqkwWZT7nFaWw9pNhpsPiATljIDjwPda3s+IFXf0vbD3U8OJRbIQInsLAFb5NOQsSPYKpG0sMAjKBwUH2FVf9aDovphN3weMS1njIuNQWjZZFt7Mxq+bLx74e2UGTDtrk4tHfW8fVOqcuXSuQYTaXyjZL4eQ3kwhSaM8zAe5Jb7oa3uqWw3azF4pFwmCUROmHZsxAZ3MKgMsfFVJANibny40sHc8Fi0lRZInDo3Bhw/+/CsrIDoQD5gGuUdncZicNBhiQRPNGhRL3WYswFpL6ZwWuTxAN+oq97H7URTKN4Ny2oIY93MDYrm4BgeRrheO3o8eJZynFQDgAPYK9Go3H7dhiHrh2tfKhDHzJ4AeJNU3EbemxcixFMm8CtBFc2kjYsBJIQL2BRrjgBlNrmp/CzH74R/bj0qxoxw+BvKQbSyqwUD7MTEHvdWtYcrnhSG9IOKVAkMcWHW3EAyN5hmNr+JBrxFHJhVEuLweHmjkxM0SxvEmfuEl2STLfLfTvXub8K6H2bl2ZKmfDYLD71RcoYo1kB4aEjh4jSu8mnnt25OmyMXjyZZC+6td55Ltm6Kn12J0CrzrrPo42MIYY4xqELEka5pSe+QRxC2C36g1uPgMRiWzYkrHGp7kUZLEcrmSwsxHThwHU2vY+CCgAAAKLADQADhatImYBYVkr4BX2oFKUoFKUoFKUoFKUoFKUoFKUoFKUoFeXW9JJAoLMQAOJJsB5k1B4rtTEA25DTZeLrpEPOZu7/dvQRPbvYAxWHlhtqynKejjVT764JtVSs5VrX3cQYAg2YQRKwuNLggj2V07bPaGbGpKYJUJRsojQ/s2ANwc2he44XIW+hFcv2vcskzMxYlkfMNQVBIBH0bajLYWsNKtgjsFOYhFIvC2VgeDKwKOjfZYXB8/CrF2Fw8kk0ceHdopv5VGj6FhfDPItwQQb5SL+ZGoFV2GK8JjbjqPI8RUx2G2tJBOsyZDJYqucEqHysFJseYLLf7VRV3xse0v+G4HEiVCMPIrqBH31IvGmc3sy94hgANDflXr0jpPgJYdoJYibKmKjFxG7lSysFJ0aysA3G68damuz3a+OXZz4Ui06qyNCdWGa4zeKa3zcjpxrf7UQrj9lPGNXyFSDxEiDOl/xLbyfxqeO5y156u8eFA2FjTtbGx4eJTHg4/2kijQyWIAD2+iWIAXhxJvyt+Dg2hJtfEOkkSrh4tyt4yVyMN4oABBz31Jv0FqjvQbs9YMNNi5O7nYm5+pECq+V2aQ/hFWvYfaJUGJLAhndpFNjdhlVeQ9YBRx5Gkx1NQyz8rbl25J2gTELh8I+IkaQyy4x0UgBUAaMMVsL95ixseGluJqEwEzrKHV2V1uVZSQR5W5eFW7t8zHDYQlbGGSQA3AvHMQdBz7w41WZYMgDA6nw5GrrTNst4dZ7H9u1mtHihlfTvDUEDiSB+YHmBXTMGVKho2DKRcMpBBHgRoRX5OjQl1JY6G97kWtrcHl510bsztjE4eF8Q0xRAMygrfeDq6c82gUgBjxuavaO5Uqq7H7YrJEskqXUgXkgO+jGmt8veW3iKseDxscq5opEkXqjBh7xzqDPSlKBSlKBSlKBSlKBSlKBSlaW2dpLh4mlZWaxUBVtmZmYIoFyBqSKDdpVYO38QwukUCg/WlZ/wCFLfGvqYzHMR/yyjrlkP5kE+6mhYsRGrKVdQykWIIBBHiDXPe2PZuExFWDS4fjurlnisNGg6qPqHS3DpVlaOcg73FWH/TjVLe1ixqGxOEjZrASzva15HYjjyjFl9pFWCl4TC4bAoszSb6SRbJl1V0OoyRrowGnfOgN7W4VVu1E3yiKWQQ7tlUNfPmZgpt3gO7oDxuTauk7U7LCKKRwgMT96aJBrHYk7yEgaWuSyjTiQON6biNn5CUezKykBhweNha48bHh18LGqikYhMsjqeWQ/wB6NG/Wrl2S7ELjNnFoTlxW+lKMeBVTYI/QHiG5HWqxtuLLKut7xICerR3jb4BffXZfQcgGziba76W5/FWVcV2nNNDi87q0WKivnU2DZwBrpoVYDlcG/jXbNqbZgTZGImgP7RYxdMrB43YjLmQjMAGN7kW51X/SxsvDyz74SxCfRN1vEEklrhSi34i5BBsCDxuADQl2nuigKyriEZgzyPYGIgDdMjWuNDdefIVnK2WO3x4Y5zLd59flfeyXa3D4fZ0gb9owKiNfVuAmc3J4BSxuftKOLCqNje2+KJLRPuRYi0eWOwJvbM3eI0HStbD42GWYbxXigVGRRFlLKQCV9bS5J1PHh0ronYbAYaJEOJXDri8qERyBQ6x3YozBtBI/rFfWC5NBV8udJ+nJ8fnbz6ntE9nOxEuJwzYrGhg0sb/JkYG4a11ke/Mkd1fG/Oqls4GZcnqlNdfHl7DX6cdBInUGxB6HiK/O228D8kx+Jit6kzEeMcgEq/Bz7qrk1MFgTFJvHRJgOCElADfieIbyOlXKDE4fHqIJQ8UoJZRezFrWuCLrLb6vEVECEtYIMxb1QOd+GvLz5Vauz/Zneq0YYBLgTyjizqb7uE8VUHiw19p01EfOxvZhEZjG1iSRNiVsC1vowW0UDm2pBuONdN2XgooUyQoFHE24k8yx4lj1OtU1NkRRZUaDdAaK0LNHpw7uU2PkRepnCwSAXhxbn94iPbwNgpqUWalVuXEY5SMrYdxz7jqfdm/KvEe2cUNGTDsegaVfzU1NKs9Khtg7eGIaSMxmOSMKWGYOpVy4Uo44i6MOAIt5VM0ClKUClKUClKUCqJ6QNoftYYl1ETJK4v8ATZskINvDeNbwWr0TXH9oYtsQmInVSxfGRZQupKJZFA9hv7asE1sXa4V23wzBrleAs/QA6d7hc86mF7TQuqmLMzN9EqUI+8DrflpfzqpS4j5OcoQTYoi+QEZIgfrNy6X4k8LDWo/ZWI3UgQMXgxGaWEkWyTKSs8Wh7pB7wsevGtI6LHh5JO9Jp0Xh/wDnzrHsPa0UoKqpikBZXicWcMps1jwcDqDwINhcVBYHtQ4uAwfKSCsl7gjS2dbsPaGrR2vtSJ5d6gysxVJ4nt84ABHLGw7r6WQuutslwtrVNC/ySBRmY2A/3/sVyztSiwZgisInzNh+e7kv3kv/AFfeuBy1HIVMJtSW4F98q2/ZO4VvKOb61uCycfrC9avbHFRY9MOkDMixMxnDLkaLuld2QeE1/MADNci1w5ZtBrrG1uBZb+JAYj3ium+jXY8U+ymMolJ30iqqSyR5mLWUdwjn/rXP9p4NmjeRbBIt2co6SuyIfga6l2I2pBs/YsWKnaykyOij1pHdjlCDmx4dALk2AJqVWjtH0TYXDIcSJmCopMysokLAjvbs6HOToAb8eFUPtDtCRoYwVRIpA5jUMsrpkIWzu3f09gvwFfduekLHYtgXcxIHDLGuQKLXy3JBLEX94Glae09hvFgRi5kZM8oRBbK0lwWYgHXKAp7xHEgAcTWLvfHTtjfjmF3N5evqf6dn8ZiELvh0D3Vml7iEKi2zEG9xbjca6i1WbsR2egxuIbNiZoC4uYQwlzsurFZXJPAg5WBaxuGI4aPYbY0GNnljGeN9wkia3RspyyoyDiCGQ6EEWPlULtCSTA7QfKAjwymwQsV7mVgAWAJBDEajnSbl16XPwywmW/3b5/P5d57M9locMzIGmLI11JmkKsh9U5L5bj1Tpyvzqi+mbZxTGRYhRpLCUYD60TXB87OfYK6zBMJI45l5qGHirAEiqV6YMMXw2HkUjuzDXqJFZQL+JIrbgoXZSUyARRlt49wsgAISGxZnX7Wlhy1Fde2OIliSOEZVQABb3I8SeZJ1Lcya5l2JVMPiI8W7BITG6S3/AKKQlQGPSPum/QnodLFituFm3kCnDxnUOwG9cfWWM6RIeIL3b7Aqot+0sbFEhMzALr3bZi1hc5VGp/TmRWlg0aSJZo0aEsMyxuRmyn1c1tASNcututU58bEZLYhiIxaSY3MkkoBukQHrMGYXZR3coINgam8b2raxICwjxId7eJ9RT4DPbrQSo24qHLiAUPWx1/CNT7L1F7V7QRyxAwhgzE2ZhlYIDa9uNm1sDrbXpVd2tj5JQkMLMJsScokOrJEBmlkJOoAXhwF2HlXzA4uIokDqUiHdw2IsBccBvB9HNyvo32Tagl+z+0yuOSRrD9mkL20GRmcISOAs4A8mNdNrjUmFlHy1XGVhh0ysNVJDuwZPC4GnEV1Ts7tH5RhoZvroCR0bgw8wQRUokaUpUUpSlApSlBC9stomDBTSL62XKluOeQiNLdTmYaVz5d7h8PIkKjequ8kPFYVIVAB9aUgd1eZueFgbZ28xjZ8Lh4gGleRnUEXXuI1mfoilgxP2bc6rwVgEhwwEkjsWjMnqkjSTFT24gcEXplAte41EaMOBSLKJs5aQkph0GaeY6XaQ3uBqNLgDmw4Vs7Y2JjJ4DZYYN0d5DCi71wyXIzzAqkdxcEKGNiRc1a9ibESC7XLyt85K1s8hHU8kFzZBYCt/F4oRIXPLgOp5Cg5jDNHLGJcvzgjdCCAySHuurC97aDTXnWGZY3SRJg2RnbvWItwAZX5MCNDWph4xDNiopEAMU6yqcuu6mtILeF7++t94gyWQE5t4GZTmU5rspI+iwOlrVR8gwLPKBvAJMls49RyACrMPqupv4G45VkXv5jJdQFfeRnW8qLoCelufMBa2dnw2mgddEkjzAclbL31HQXJNuWte+0UGUO4+kov5qQPeVNvZQUracuTD43NxkTD7vxaGW7D/ANwV0bA9gN+0IxhZcPhoY44IVI7zZFaSRjbS5JWw1sOPKqhisJG2HwBmBytjN45HKAOM5b7AUC55ca7mTrWaqnbTwuA2cv7HCwiYi6XAJ1NrljrYdOP51V+38fy3aEGGLXhw91fUd6V48728QgUW+3Vn7V4PDu8mOxXfgwsZVY/ovLmv3utmIULwuTeuazo7yRkNaTevNI/INlQMfLioHSwq4xKzbJwR2fPgcWugSM74fZzBZL36K6tf7Jqb7fdnIsbiZBGVTGRlREb9ydCiuEkHKQAkBxysDyqD2lLvpt9fPDJE8duFtDmUjxterV2XwUU6riVJGKwUirKR/TRBe4XHM5CO9xuhHDSrYRO+jXbWbDrg51aLFYcZGjk0YoPVZfrLYhSRfUeIrR9LGZcGsSi+8nR0+zuyZnHlZCR52q82RssgCk2urWBNiOR6Gqh2lIxGJeMG4giZD+9nW9iOqoAfx1mKpmGjXdhs1hmfejkyLZhf22B6iveNw7MI5ps3ebOIxxygXGbrIxtpyuBWHsxDvUVW1ByZvwrmb2E2FTm24GkkgRTYsx1HFQLEkeI5eNq0iFWNV3v05nDbwqM1jlICA8kXh4m551sRRowIK99ljAYkWRTbORc8bA8BevGGjXMxWMmLNIcoOVbDuIGa/DTMTrUbtbEKIJGQB3VEiQ2uN45yLlv0zA+ygnez+BxErS4+Bo1DFoolljYq0Uba2lU5o8zXN8pBCrWbE4ZXbdvH8lmcH9k9mgn0ud3INL6cRY9U51a+yYEeHTDWytAioR5C1/fW9tLZ8c8ZjlQMp5HqOBB4qw4hhqDUFEwDSBJoJgywhhEHbV4mdLgOOcV9Fe/HTxFp9HE7quIwsihWhkDADgUlFwR4Flc/DlUNJhpYJNzMRKrgrDI39Klrth8RbQuBqrc+PEG+x2XxW6xkUbFmSWJ1hkPEorBhHIf62M518QR40o6HSlKypSlKBSlae1NpRwJmla1zZRxZmOgVFGrMTyFBTttOJMTMwOpIwytaxSJV32Iynq1wt/LpWx2Xwtw2IYWMtiPCNdIkH2QO8RzJHSocqwwoZwVkMEzuCdRJLNZ/da3sq5YRAqKo4AAe7StIzVCgfKZr/wBFEf7zf7+HnWztacm0Mfrvx8F/8/lW3hcOI0CjQDieFzzJNBQvSDhLY2Jx/T4WWI9M0Lh09tpD7qy/Iw6pPFZZCik/Vk7o0e3P7Q163rD6RttRF8KEdWMOJQuV1FpAYiL8Ld4XqSwMeQNF/Vuyj7p76/BreygjsG4AC2KmKcd08VWW+niAWIvw4Vm7TAfJpSfojN7jr8K2tox3jkIHeCGx593vD8q0+1EgOBxDjgYHYeRS4oPPZ/AjcYd5AG/kyx5CO7lkGaS/XPoD4DxNbuN25PBDFhIc0k2bLHb15IcpyHNyK6KzacL6XrJs9bRRDpFGP8C1nx+GkaK+Hfd4hAxifS12WzI19MrDrwYKeVasRT+1W0GaKDA30w4BmsQQ0/GxPMJcn7x8Kgt4cwYcr+4nUGvaxARsbMNStm9YG+UhvtZr38b1ixVwtxwLEE+R0/KrB9J9W2irew8+J86lOzG2ThMUMR9BgEmHG6dfNTqPxdah8ESxIGosSfDyrZhTMHA4gKw9q3/SlF72PtqfCSHDyJdGV2wwvmWUs148jjQCx1F9AL1uYCDdgAtnYsXkf68jNmdvK+gHJQo5VH9i8M+4R5WO7Gb5NGeMaPqze03CA+qpNrXqTYWNTGFVbsNFYT34rNKg8llcfoKl9oT5C8nOOLu/ekaw9twK0uy62bGDpi5h/jJ/WsOOMqGWWzTwrIcybx45FyWuVZCMyqSbKRfxrKtvCbMDZVk9SMACK+pNvWmHjxCe+onDhJ9pYeC4P8qMzADgmHjZlv4FlArDhdtqkqvG65WGU5YyIgxYZLPf1je+aRibmx41I4GJoJUxkZjUxs8Ygdv2sqOAZMz2ypJoCvI8LgGpbpZLel32tCUcYmPivrjqOp/X2VJQSh1DLwNaex9swYpSYXDEaPGdHXqHTiPPhWDC/sJd2fm31Q9D/vT3VUZ9t4ATRMnAnUHmGGqMPFT8LiqvFIWTPazqflC2Fyk8JCzhegdP161eKq2CiHyhxbT5Rw8JYBmHtuaC+ROGAI4EA++vVVnsNtMNAmHkOWaNSMres0QZljdfrKygajncHWrNWVKUpQK5j27/AJ52d99P8yvtKuPY2dpfMH90/wD8lqteH9X2n86Uqoj8P/zb+R/Jaje3nFaUoOWbW/5Wb70X+cK6hP8APy+UH+UKUqjxN6rfdb+E1C7X/myX+yH/ACqUqCYwXzcX7uP+Bazy0pXT0ijdovnsR/aI/wCGGozFfMH73/eaUqQeNhcX8l/WvS+pL+4X/vpSg6i3rHyH5CsctKVZ0ITs76+M/tcv6Vt4T5uX95P/ABNXylc1Vg/zBJ5Sfx1Adv8A1F+8P4Fr5Ss3pqds3oh/nFP7O38cddn7VcE++f4aUqxKkRw9n6VW8F/zL/v4f8gUpVRWcT/Oeyv3Cfxy12ClKypSlKD/2Q==',
      },// More people...
  ]
  
  export default function Example() {
    return (
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-20 px-6 lg:px-8 xl:grid-cols-3">
          <div className="max-w-xl">
            <h2 className="text-pretty text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
              Acerca de los dueños
            </h2>
            <p className="mt-6 text-lg/8 text-gray-600">
              Somos estudiantes de la Universidad Tecnica de Cotopaxi, estamos cursando septimo semestre de la Carrera de Sistemas de informacion, somos mas de 20 alumnos en el aula pero mas son hombres que mujeres.
            </p>
          </div>
          <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
            {people.map((person) => (
              <li key={person.name}>
                <div className="flex items-center gap-x-6">
                  <img alt="" src={person.imageUrl} className="size-16 rounded-full" />
                  <div>
                    <h3 className="text-base/7 font-semibold tracking-tight text-gray-900">{person.name}</h3>
                    <p className="text-sm/6 font-semibold text-indigo-600">{person.role}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
  